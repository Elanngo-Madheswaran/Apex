<script>
  
    let ima = $props();
    let images = ima.images;
    let currentIndex = $state(0);
    let interval;
  
    // Function to go to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Start auto-scroll on component mount
    const startAutoScroll = () => {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slides every 3 seconds
    };
  
    // Stop auto-scroll when the component is destroyed
    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    $effect(() => {
      startAutoScroll();
    });
  </script>
  
  <div class="w-full max-w-3xl mx-auto">
    <!-- Carousel Slides -->
    <div class="flex overflow-hidden">
      {#each images as image, i}
        <img
          src={image.img}
          alt={image.alt}
          class="w-full transition-all duration-700 ease-in-out"
          class:opacity-100={i === currentIndex}
          class:opacity-0={i !== currentIndex}
          class:hidden={i !== currentIndex}
        />
      {/each}
    </div>
  
    <!-- Indicators -->
    <div class="flex justify-center space-x-2 mt-4">
      {#each images as _, i}
        <button
          class="w-3 h-3 rounded-full"
          class:bg-blue-500={i === currentIndex}
          class:bg-gray-300={i !== currentIndex}
          onclick={() => (currentIndex = i)}
          aria-label={`Slide ${i + 1}`}
        ></button>
      {/each}
    </div>
  </div>