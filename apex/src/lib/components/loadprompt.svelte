<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    // Props
    let { title , message, buttonText, buttonLink } = $props();
    // State
    let showPrompt = $state(false);
    
    // Check if the user has seen this prompt before
    onMount(() => {
        const hasSeenPrompt = localStorage.getItem('apex_prompt_seen');
        
        if (!hasSeenPrompt) {
            // Show the prompt after a small delay
            setTimeout(() => {
                showPrompt = true;
            }, 1500);
        }
    });
    
    // Close the prompt
    function closePrompt() {
        showPrompt = false;
        // Remember that the user has seen this
        localStorage.setItem('apex_prompt_seen', 'true');
    }
    
    // Handle join action
    function handleJoin() {
        closePrompt();
        // Additional join logic can go here
    }
</script>

{#if showPrompt}
    <div 
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        transition:fade={{ duration: 300 }}
    >
        <div class="bg-white rounded-lg shadow-xl overflow-hidden border border-orange-300 max-w-sm w-full mx-4">
            <div class="bg-orange-500 py-2 px-4 flex justify-between items-center">
                <h3 class="text-white font-bold">{title}</h3>
                <button 
                    onclick={closePrompt}
                    class="text-white hover:text-gray-200 focus:outline-none"
                    aria-label="Close notification"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            
            <div class="p-4">
                <p class="text-gray-700 mb-4">{message}</p>
                
                    <a 
                        href={buttonLink} 
                        onclick={handleJoin}
                        class="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors duration-200"
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
{/if}