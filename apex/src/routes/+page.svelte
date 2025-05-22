<script>


    import Carousal from "$lib/components/carousal.svelte";
    const images = [
        {
            img:"/home/carousal/im1.png", alt:"The best research you can do is talk to people - Terry Pratchett"
        },
        {
            img:"/home/carousal/im2.png", alt:"Science is not finished until it is communicated - Sir Mark Walport"
        },
        {
            img:"/home/carousal/im3.png", alt:"If I come to an impasse, it usually means I don't thoroughly understand what I am writing about"
        },
        {
            img:"/home/carousal/im4.png", alt:"No research without action, no action without research - Kurt Lewin"
        } 
    ];

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
    <hero class="flex max-w-screen-xl sm:flex-row flex-col items-center lg:h-[450px]">
        <div class="sm:w-2/5 p-5 h-full">
            <img src="/home/main_img.png" class="object-cover h-full w-full" alt="Person writing in paper with feather" />
        </div>
        <div class="sm:p-5 p-2 pb-5 flex flex-col sm:w-3/5 justify-center h-full">
            <p class="self-center sm:text-start text-center lg:text-6xl text-3xl font-bold italic">Empowering Researcher Through Knownledge</p>
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
    <section id="about" class="flex w-full md:flex-row flex-col border-y-2 border-zinc-800">
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
                                <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 self-start hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_4px_2px_0px_rgba(221,107,32,0.4),8px_8px_2px_0px_rgba(237,137,54,0.3),12px_12px_2px_0px_rgba(246,173,85,0.2),16px_16px_2px_0px_rgba(251,211,141,0.1)]">Explore Programs</button>
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
                        <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_4px_2px_0px_rgba(221,107,32,0.4),8px_8px_2px_0px_rgba(237,137,54,0.3),12px_12px_2px_0px_rgba(246,173,85,0.2),16px_16px_2px_0px_rgba(251,211,141,0.1)]">More Info</button>
                    </div>
                </div>
                <div class="w-96 flex flex-col relative bg-white p-5 xl:mt-10 sm:m-5 mt-5">
                    <span class="absolute self-center -top-5 rounded-full bg-neutral-200 text-center text-3xl h-12 w-12 flex justify-center items-center">2</span>
                    <div class="mt-6 flex flex-col items-center">
                        <h4 class="text-2xl font-medium text-center">Refined Academic Research Manuscript</h4>
                        <p class="text-md">Upon concluding the Academic Research Program, students depart with a refined research manuscript, primed for submission to science fairs, academic conferences, essay contests, or publication in journals. This culmination of their efforts not only demonstrates their scholarly prowess but also serves as a testament to their dedication to academic excellence.</p>
                        <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_4px_2px_0px_rgba(221,107,32,0.4),8px_8px_2px_0px_rgba(237,137,54,0.3),12px_12px_2px_0px_rgba(246,173,85,0.2),16px_16px_2px_0px_rgba(251,211,141,0.1)]">More Info</button>
                    </div>
                </div>
                <div class="w-96 flex flex-col relative bg-white p-5 h-fit sm:m-5 mt-5">
                    <span class="absolute self-center -top-5 rounded-full bg-neutral-200 text-center text-3xl h-12 w-12 flex justify-center items-center">3</span>
                    <div class="mt-6 flex flex-col items-center">
                        <h4 class="text-2xl font-medium text-center">Enhanced Academic Writing Skills</h4>
                        <p class="text-md">Early exposure to university life facilitates adaptation to its academic demands, with professors expecting students to meet elevated standards in their writing. Thus, engaging in college-level writing at an early stage equips students with the readiness needed to navigate the rigors of college life effectively. This proficiency not only enhances their academic success</p>
                        <button class="bg-orange-600 hover:border-orange-700 hover:border text-neutral-100 p-3 w-40 mt-5 hover:bg-white hover:text-orange-500 transition-all duration-500 ease-out hover:shadow-[4px_4px_2px_0px_rgba(221,107,32,0.4),8px_8px_2px_0px_rgba(237,137,54,0.3),12px_12px_2px_0px_rgba(246,173,85,0.2),16px_16px_2px_0px_rgba(251,211,141,0.1)]">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w-full xl:w-3/4 flex md:flex-row flex-col justify-center py-5">
        <div class="md:w-1/2 w-full p-2 sm:p-5">
            <Carousal {images} />
        </div>
        <div class="md:w-1/2 flex justify-center items-center">
            <p class="md:text-6xl text-3xl text-center font-bold">Interactive Experience</p>
        </div>
    </section>

    <section class="w-full flex flex-col items-center bg-zinc-800 p-5 text-white" id="contact">
        <div class="xl:w-3/4">
            <p class="sr-only">Contact form</p>
            <h3 class="sm:text-5xl text-2xl font-bold my-5 text-start w-full">Contact Apex Professional Experts</h3>
        </div>
        <div class="xl:w-3/4 w-full flex flex-row flex-wrap justify-center items-center">
                <form class="md:w-4/6  max-w-screen-lg my-5">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
                          First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
                          Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                          E-mail
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                          Message
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                    </div>
                    </div>
                    <div class="md:flex md:items-center">
                      <div class="md:w-1/3">
                        <button class="shadow bg-white  focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
                          Send
                        </button>
                      </div>
                      <div class="md:w-2/3"></div>
                    </div>
                  </form>
            <div>
                <p class="sm:m-5 m-2 sm:text-2xl text-md">Email:arswacademy@gmail.com</p>
                <p class="sm:m-5 m-2 sm:text-2xl text-md">Tel: (+1) 919-943-2704</p>
                <p class="sm:m-5 m-2 sm:text-2xl text-md">Cary NC</p>
            </div>
        </div>

    </section>
    
</div>