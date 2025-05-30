<script>
    
    // Sample testimonial data - replace with your actual data
    const testimonials = [
        {
            name: "Dr. Sarah Johnson",
            title: "Associate Professor, Harvard University",
            image: "/arswa_logo.png",
            text: "Apex Research has been instrumental in helping me get my research published in high-impact journals. Their attention to detail and scientific expertise made all the difference."
        },
        {
            name: "Prof. Mark Williams",
            title: "Senior Researcher, Stanford Medical Center",
            image: "/arswa_logo.png",
            text: "The team at Apex provided exceptional editing services for our complex medical research paper. Their scientific writing expertise helped us communicate our findings effectively."
        },
        {
            name: "Dr. Emily Chen",
            title: "Postdoctoral Fellow, MIT",
            image: "/arswa_logo.png",
            text: "As a non-native English speaker, I found Apex's editing services invaluable. They helped refine my manuscript while preserving my scientific voice and ideas."
        },
        {
            name: "Prof. James Rodriguez",
            title: "Department Chair, University of California",
            image: "/arswa_logo.png",
            text: "I've worked with Apex for several publications now. Their consistent quality, quick turnaround times, and expert feedback have made them my go-to editing service."
        },
        {
            name: "Dr. Sophia Martinez",
            title: "Principal Investigator, National Research Institute",
            image: "/arswa_logo.png",
            text: "The scientific writing workshop conducted by Apex transformed how our research team approaches manuscript preparation. The impact on our acceptance rates has been remarkable."
        }
    ];
</script>

<main class="bg-neutral-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-neutral-100 py-16">
        <div class="max-w-screen-xl mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Client Testimonials</h1>
            <p class="text-xl text-center text-gray-600 max-w-3xl mx-auto">
                See what our clients have to say about their experience working with 
                Apex Research and Scientific Writing Academy.
            </p>
        </div>
    </section>

    <!-- Testimonials Grid Section -->
    <section class="py-16 max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each testimonials as testimonial}
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                            <p class="text-sm text-gray-600">{testimonial.title}</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <svg class="w-8 h-8 text-orange-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p class="text-gray-700 italic">{testimonial.text}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-orange-50 py-16 px-4">
        <div class="max-w-screen-xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Our Services?</h2>
            <p class="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Join our satisfied clients and let us help you elevate your research and academic writing.
            </p>
            <a href="/#contact" class="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300">
                Get Started Today
            </a>
        </div>
    </section>
</main>

<footer class="bg-neutral-100 py-8">
    <div class="max-w-screen-xl mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Apex Research and Scientific Writing Academy. All rights reserved.</p>
    </div>
</footer>