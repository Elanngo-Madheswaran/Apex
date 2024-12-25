<script>
    const courses = [
        {
            imgSrc: "/home/courses/im1.png", //Use 3:2 ratio images for better view
            title: "Academic: Certificate in Research and Scientific Writing",
            duration: "12 weeks",
            eligibility: "Rising sophomores and above"
        },
    {
        imgSrc: "/home/courses/im2.png",
        title: "Academic: Diploma in Research and Scientific Writing",
        duration: "6 months to 1 year",
        eligibility: "Completion of the certificate course"
    },
    {
        imgSrc: "/home/courses/im3.png",
        title: "Professional: Certificate in Scientific Writing",
        description: "Email us @ arswacademy@gmail.com"
    },
    {
        imgSrc: "/home/courses/im4.jpeg",
        title: "Professional: Certificate in Scientific Editing",
        description: "Email us @ arswacademy@gmail.com"
    }
    ];
</script>

<div class="w-full flex flex-col justify-center items-center">
    <hero class="flex max-w-screen-xl sm:flex-row flex-col items-center">
        <div class="sm:w-1/2 p-5">
            <img src="/home/main_img.png" class="object-cover w-full" alt="Person writing in paper with feather" />
        </div>
        <div class="sm:p-5 p-2 pb-5 flex flex-col sm:w-1/2 justify-center">
            <p class="self-center sm:text-start text-center lg:text-6xl text-3xl font-bold">Empowering Researcher Through Knownledge</p>
        </div>
    </hero>
    <section class="w-full bg-zinc-800 flex justify-center">
        <div class="max-w-screen-xl p-5 py-20 justify-center md:w-3/4">
            <h2 class="text-white font-bold md:text-5xl text-3xl pb-10">Welcome to Apex Research and Scientific Writing Academy</h2>
            <a href="#courses">
                <button class="bg-transparant border border-white text-neutral-100 p-3 w-40 self-start hover:bg-white hover:text-zinc-800">Explore Programs</button>
            </a>
        </div>
    </section>
    <section id="about" class="flex w-full md:flex-row flex-col">
        <div class="md:w-1/2">
            <img src="/home/women_reading.png" class="h-full w-full object-cover" alt="Person writing in paper with feather" />
        </div>
        <div class="sm:px-5 p-2 pb-5 flex flex-col md:w-1/2">
            <p class="text-start xl:text-5xl lg:text-3xl text-xl font-bold underline">Our Story</p>
            <p class="text-start xl:text-3xl lg:text-xl text-lg sm:px-5 pt-5"> At Apex Research and Scientific Writing Academy, we are dedicated to empowering aspiring researchers and professionals. Our mission is to provide high-quality training and resources in research methodology, scientific writing, and publication ethics. We strive to equip individuals with the skills and knowledge needed to excel in the field of scientific research.</p>
        </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center p-5" id="courses">
        <h2 class="md:text-4xl text-3xl font-bold">Our Courses</h2>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {#each courses as course}
                <div class="sm:m-5 flex md:flex-row flex-col justify-center items-center md:items-stretch bg-neutral-300 group hover:scale-110 hover:shadow-xl transition-all duration-300">
                    <img src={course.imgSrc} class="md:w-1/2 h-full w-full" alt="Person teaching" />
                    <div class="px-5 my-5 flex flex-col">
                        <div class="flex flex-col items-stretch justify-between md:h-4/6">
                            <p class="text-start xl:text-3xl lg:text-xl text-lg font-bold">{course.title}</p>
                            {#if course.duration || course.eligibility}
                                <ul>
                                    {#if course.duration}
                                        <li class="text-start xl:text-xl lg:text-lg text-base">Duration: {course.duration}</li>
                                    {/if}
                                    {#if course.eligibility}
                                        <li class="text-start xl:text-xl lg:text-lg text-base">Eligibility: {course.eligibility}</li>
                                    {/if}
                                </ul>
                            {:else}
                                <p class="text-start xl:text-xl lg:text-lg text-base">{course.description}</p>
                            {/if}
                        </div>
                        {#if course.duration}
                            <div class="flex flex-col justify-end md:h-2/6">
                                <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 self-start hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_3px_4px_1px_#ed8936,8px_6px_7px_2px_#ed8936,16px_12px_16px_4px_#f6ad55]">Explore Programs</button>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <section class="w-full flex justify-center" id="services">
        <div class="max-w-screen-2xl w-full flex flex-col justify-center items-center">
            <h3 class="text-4xl text-center font-bold">Our Services</h3>
            <div class="w-full h-full bg-[url('/home/services/image.png')] bg-fixed flex mt-10 sm:p-10 p-5 flex-wrap justify-center">
                <div class="w-96 flex flex-col relative bg-white p-5 h-fit sm:m-5 mt-5">
                    <span class="absolute self-center -top-5 rounded-full bg-neutral-200 text-center text-3xl h-12 w-12 flex justify-center items-center">1</span>
                    <div class="mt-6 flex flex-col items-center">
                        <h4 class="text-2xl font-medium text-center">Gain insights from Professionals</h4>
                        <p class="text-md">Our team consists of experienced professors and scientists, each with a PhD and postdoctoral expertise, offering personalized guidance to help students excel in research. With their wealth of knowledge and practical experience, they mentor students through every step of the research process, fostering academic growth and achievement.</p>
                        <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_3px_4px_1px_#ed8936,8px_6px_7px_2px_#ed8936,16px_12px_16px_4px_#f6ad55]">More Info</button>
                    </div>
                </div>
                <div class="w-96 flex flex-col relative bg-white p-5 xl:mt-10 sm:m-5 mt-5">
                    <span class="absolute self-center -top-5 rounded-full bg-neutral-200 text-center text-3xl h-12 w-12 flex justify-center items-center">2</span>
                    <div class="mt-6 flex flex-col items-center">
                        <h4 class="text-2xl font-medium text-center">Refined Academic Research Manuscript</h4>
                        <p class="text-md">Upon concluding the Academic Research Program, students depart with a refined research manuscript, primed for submission to science fairs, academic conferences, essay contests, or publication in journals. This culmination of their efforts not only demonstrates their scholarly prowess but also serves as a testament to their dedication to academic excellence.</p>
                        <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_3px_4px_1px_#ed8936,8px_6px_7px_2px_#ed8936,16px_12px_16px_4px_#f6ad55]">More Info</button>
                    </div>
                </div>
                <div class="w-96 flex flex-col relative bg-white p-5 h-fit sm:m-5 mt-5">
                    <span class="absolute self-center -top-5 rounded-full bg-neutral-200 text-center text-3xl h-12 w-12 flex justify-center items-center">3</span>
                    <div class="mt-6 flex flex-col items-center">
                        <h4 class="text-2xl font-medium text-center">Enhanced Academic Writing Skills</h4>
                        <p class="text-md">Early exposure to university life facilitates adaptation to its academic demands, with professors expecting students to meet elevated standards in their writing. Thus, engaging in college-level writing at an early stage equips students with the readiness needed to navigate the rigors of college life effectively. This proficiency not only enhances their academic success</p>
                        <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_3px_4px_1px_#ed8936,8px_6px_7px_2px_#ed8936,16px_12px_16px_4px_#f6ad55]">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</div>