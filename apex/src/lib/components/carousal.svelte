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
          src={image}
          alt={`Slide ${i + 1}`}
          class="w-full transition-all duration-700 ease-in-out"
          class:opacity-100={i === currentIndex}
          class:opacity-0={i !== currentIndex}
          class:hidden={i !== currentIndex}
        />
      {/each}
    </div>
  
  </div>