<template>
  <div class="job-details bg-white rounded-[10px] shadow-md mt-14 px-8 pt-10 pb-7">
    <h3 class="font-gilroy-bold text-primary-blue flex items-center justify-between text-2xl tracking-widest">Front end developer {{ num }}</h3>
    <p class="location text-gray-900 flex items-center gap-1 font-gilroy-regular tracking-widest mt-3">
    <span class="location-icon">
        <svg class="xl:h-4 h-3 xl:w-4 w-3" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.29184 5.87744C8.61552 5.87744 7.95439 6.07799 7.39206 6.45374C6.82972 6.82948 6.39143 7.36354 6.13261 7.98837C5.8738 8.61321 5.80608 9.30076 5.93802 9.96408C6.06996 10.6274 6.39564 11.2367 6.87387 11.7149C7.3521 12.1932 7.9614 12.5188 8.62473 12.6508C9.28805 12.7827 9.9756 12.715 10.6004 12.4562C11.2253 12.1974 11.7593 11.7591 12.1351 11.1968C12.5108 10.6344 12.7114 9.97329 12.7114 9.29697C12.7103 8.39037 12.3497 7.5212 11.7087 6.88014C11.0676 6.23908 10.1984 5.87847 9.29184 5.87744ZM9.29184 11.0067C8.95368 11.0067 8.62312 10.9065 8.34195 10.7186C8.06078 10.5307 7.84163 10.2637 7.71223 9.95127C7.58282 9.63885 7.54896 9.29507 7.61493 8.96341C7.6809 8.63175 7.84374 8.3271 8.08286 8.08798C8.32197 7.84887 8.62662 7.68603 8.95828 7.62006C9.28995 7.55409 9.63372 7.58795 9.94614 7.71735C10.2586 7.84676 10.5256 8.06591 10.7135 8.34707C10.9013 8.62824 11.0016 8.95881 11.0016 9.29697C11.0011 9.75026 10.8208 10.1848 10.5002 10.5054C10.1797 10.8259 9.74514 11.0062 9.29184 11.0067Z" fill="#62BECB"/>
        <path d="M15.8628 2.72094C14.2381 1.09668 12.0694 0.131811 9.77514 0.0125409C7.48091 -0.106729 5.22382 0.628058 3.43949 2.07509C1.65516 3.52212 0.470078 5.57881 0.112978 7.84821C-0.244123 10.1176 0.252067 12.4389 1.50578 14.3639L7.96586 24.2813C8.10962 24.5019 8.30618 24.6833 8.53773 24.8088C8.76928 24.9343 9.02849 25 9.29186 25C9.55523 25 9.81444 24.9343 10.046 24.8088C10.2775 24.6833 10.4741 24.5019 10.6179 24.2813L17.0781 14.3639C18.2415 12.5782 18.7556 10.4468 18.5343 8.32701C18.313 6.20725 17.3698 4.22798 15.8628 2.72094ZM15.6456 13.4307L9.29189 23.1843L2.93814 13.4307C0.993282 10.4451 1.41041 6.44956 3.92996 3.9299C4.63409 3.22575 5.47002 2.66718 6.39003 2.2861C7.31003 1.90501 8.29608 1.70887 9.29189 1.70887C10.2877 1.70887 11.2737 1.90501 12.1937 2.2861C13.1138 2.66718 13.9497 3.22575 14.6538 3.9299C17.1734 6.44956 17.5904 10.4451 15.6456 13.4307Z" fill="#62BECB"/>
        </svg>
    </span>
    <span>
        Ikeja, Lagos
    </span>
    </p>
    <button class="apply px-8 py-2 rounded-2xl my-6 tracking-wider bg-primary-blue text-white font-gilroy-regular" @click="showFormModal = !showFormModal">
    Apply Via Find Job
    </button>
    <div class="job-description text-justify">
    <p class="tracking-widest leading-loose text-sm mt-6">
        In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflow such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance 
        and documenting our front-end codebase.
    </p>
    <ul class="list-disc list-inside my-5 font-gilroy-regular tracking-widest text-sm">
        <li class="mb-2">
        Minimum Qualification: Degree
        </li>
        <li class="mb-2">
        Experience Level: Senior level
        </li>
        <li class="mb-2">
        Experience Length: 5 years
        </li>
    </ul>
    <h5 class="font-gilroy-bold text-sm">Job Description/Requirmenets</h5>
    <ul class="list-disc px-4 my-5 font-gilroy-regular tracking-widest text-sm">
        <li class="mb-4">5+ years experience of front-end related (HTML5 + JS + CSS3) development work experience, familiar with mobile application development;</li>
        <li class="mb-4">Proficient in JavaScript / Typescript, mastering technologies such as HTML, CSS, DOM, AJAX, etc., can quickly complete the established interactive design functions; At least 4 years experience is required.</li>
        <li class="mb-4">Thorough understanding of React.js and its core principles</li>
        <li class="mb-4">Experience with popular React.js workflows (such as Flux or Redux)</li>
        <li class="mb-4">Familiarity with RESTful API’s</li>
        <li class="mb-4">Knowledge of isomorphic react is a plus</li>
        <li class="mb-4">Familiarity with mordern front-end build pipelines and tools</li>
        <li class="mb-4">Experience with common front-end development tools such as Babel, Webpack, NPM e.t.c</li>
    </ul>
    </div>

    <teleport to="#app">
        <!-- form modal -->
        <div v-if="showFormModal" class="form-modal-overlay flex items-center justify-center overflow-scroll fixed left-0 right-0 bottom-0 top-0 w-screen" @click.self="showFormModal = !showFormModal">
            <div class="form w-3/6 bg-[#F9FBFD] h-height80 overflow-scroll px-12 rounded pt-10 py-4">
                <form action="#">
                    <h3 class="font-gilroy-bold text-primary-blue flex items-center justify-between text-2xl tracking-widest">Front end developer {{ num }}</h3>
                    <p class="location text-gray-900 flex items-center gap-1 font-gilroy-regular tracking-widest mt-3">
                    <span class="location-icon">
                        <svg class="xl:h-4 h-3 xl:w-4 w-3" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29184 5.87744C8.61552 5.87744 7.95439 6.07799 7.39206 6.45374C6.82972 6.82948 6.39143 7.36354 6.13261 7.98837C5.8738 8.61321 5.80608 9.30076 5.93802 9.96408C6.06996 10.6274 6.39564 11.2367 6.87387 11.7149C7.3521 12.1932 7.9614 12.5188 8.62473 12.6508C9.28805 12.7827 9.9756 12.715 10.6004 12.4562C11.2253 12.1974 11.7593 11.7591 12.1351 11.1968C12.5108 10.6344 12.7114 9.97329 12.7114 9.29697C12.7103 8.39037 12.3497 7.5212 11.7087 6.88014C11.0676 6.23908 10.1984 5.87847 9.29184 5.87744ZM9.29184 11.0067C8.95368 11.0067 8.62312 10.9065 8.34195 10.7186C8.06078 10.5307 7.84163 10.2637 7.71223 9.95127C7.58282 9.63885 7.54896 9.29507 7.61493 8.96341C7.6809 8.63175 7.84374 8.3271 8.08286 8.08798C8.32197 7.84887 8.62662 7.68603 8.95828 7.62006C9.28995 7.55409 9.63372 7.58795 9.94614 7.71735C10.2586 7.84676 10.5256 8.06591 10.7135 8.34707C10.9013 8.62824 11.0016 8.95881 11.0016 9.29697C11.0011 9.75026 10.8208 10.1848 10.5002 10.5054C10.1797 10.8259 9.74514 11.0062 9.29184 11.0067Z" fill="#62BECB"/>
                        <path d="M15.8628 2.72094C14.2381 1.09668 12.0694 0.131811 9.77514 0.0125409C7.48091 -0.106729 5.22382 0.628058 3.43949 2.07509C1.65516 3.52212 0.470078 5.57881 0.112978 7.84821C-0.244123 10.1176 0.252067 12.4389 1.50578 14.3639L7.96586 24.2813C8.10962 24.5019 8.30618 24.6833 8.53773 24.8088C8.76928 24.9343 9.02849 25 9.29186 25C9.55523 25 9.81444 24.9343 10.046 24.8088C10.2775 24.6833 10.4741 24.5019 10.6179 24.2813L17.0781 14.3639C18.2415 12.5782 18.7556 10.4468 18.5343 8.32701C18.313 6.20725 17.3698 4.22798 15.8628 2.72094ZM15.6456 13.4307L9.29189 23.1843L2.93814 13.4307C0.993282 10.4451 1.41041 6.44956 3.92996 3.9299C4.63409 3.22575 5.47002 2.66718 6.39003 2.2861C7.31003 1.90501 8.29608 1.70887 9.29189 1.70887C10.2877 1.70887 11.2737 1.90501 12.1937 2.2861C13.1138 2.66718 13.9497 3.22575 14.6538 3.9299C17.1734 6.44956 17.5904 10.4451 15.6456 13.4307Z" fill="#62BECB"/>
                        </svg>
                    </span>
                    <span>
                        Ikeja, Lagos
                    </span>
                    </p>

                    <div class="form-element mb-6 flex itemx-center flex-col mt-8">
                        <label for="first-name" class="mb-2 tracking-wider text-primary-blue font-gilroy-bold">First Name</label>
                        <input type="text" name="first-name" class="w-full px-6 py-3 bg-white rounded outline-none border-[#0F4A7B] border">
                    </div>
                    <div class="form-element mb-6 flex itemx-center flex-col mt-6">
                        <label for="last-name" class="mb-2 tracking-wider text-primary-blue font-gilroy-bold">Last Name</label>
                        <input type="text" name="last-name" class="w-full px-6 py-3 bg-white rounded outline-none border-[#0F4A7B] border">
                    </div>
                    <div class="form-element mb-6 flex itemx-center flex-col mt-6">
                        <label for="email" class="mb-2 tracking-wider text-primary-blue font-gilroy-bold">Email Address</label>
                        <input type="email" name="email" class="w-full px-6 py-3 bg-white rounded outline-none border-[#0F4A7B] border">
                    </div>
                    <div class="form-element mb-6 flex itemx-center flex-col mt-6">
                        <label for="location" class="mb-2 tracking-wider text-primary-blue font-gilroy-bold">Location</label>
                        <input type="text" name="location" class="w-full px-6 py-3 bg-white rounded outline-none border-[#0F4A7B] border">
                    </div>
                    <div class="form-element mb-6 flex itemx-center flex-col mt-6">
                        <label for="phone" class="mb-2 tracking-wider text-primary-blue font-gilroy-bold">Phone</label>
                        <input type="number" name="phone" class="w-full px-6 py-3 bg-white rounded outline-none border-[#0F4A7B] border">
                    </div>
                    <div class="form-element mb-6 flex itemx-center flex-col mt-6">
                    <div class="file-group w-full">
                      <label for="file-upload" class="custom-file-upload flex-col w-full  flex items-center justify-center">                        
                            <svg class="h-20 w-20 mb-2" viewBox="0 0 89 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M77.6689 27.9235V27.0578C77.4845 19.7292 74.4081 12.7711 69.1116 7.70261C63.815 2.63411 56.7283 -0.13315 49.3986 0.00492999C43.9398 -0.0396125 38.5845 1.49425 33.977 4.42193C29.3694 7.34962 25.7061 11.5464 23.4278 16.5072C17.013 17.2228 11.084 20.268 6.76561 25.0652C2.44718 29.8623 0.0397338 36.0777 0 42.5321C0.00709339 45.952 0.688173 49.337 2.0043 52.4936C3.32043 55.6501 5.24579 58.5163 7.67032 60.9283C10.0949 63.3402 12.971 65.2507 16.1343 66.5504C19.2977 67.8501 22.6861 68.5136 26.1061 68.5029H36.2509V63.0923H26.1061C20.8771 62.8093 15.9498 60.5546 12.3174 56.7827C8.68502 53.0107 6.61756 48.002 6.53178 42.7661C6.44601 37.5302 8.34829 32.4564 11.8552 28.5675C15.3621 24.6786 20.2129 22.2637 25.4297 21.8096H27.2423L27.8645 20.1052C29.5424 15.7474 32.5175 12.0096 36.388 9.39705C40.2585 6.78447 44.8377 5.42302 49.5068 5.49667C55.4018 5.35817 61.1126 7.5553 65.3945 11.6092C69.6765 15.6632 72.1826 21.2453 72.3666 27.139C72.4038 27.8599 72.4038 28.5823 72.3666 29.3032L72.1501 31.251L73.9086 32.0626C77.3096 33.5948 80.0791 36.2517 81.7511 39.5862C83.4231 42.9207 83.8956 46.7293 83.0891 50.3713C82.2826 54.0133 80.2463 57.2664 77.3228 59.5832C74.3993 61.9001 70.7671 63.1393 67.0371 63.0923H52.4827V68.5029H67.0371C71.8484 68.5374 76.534 66.9677 80.3535 64.0418C84.173 61.1159 86.9087 57.0006 88.1281 52.3463C89.3475 47.692 88.9812 42.764 87.0871 38.3411C85.193 33.9182 81.879 30.2526 77.6689 27.9235Z" fill="#0F4A7B"/>
                                <path d="M55.945 51.8649C56.4846 51.8735 57.0145 51.7205 57.4665 51.4255C57.9185 51.1306 58.2719 50.7072 58.4814 50.2098C58.6908 49.7123 58.7467 49.1637 58.6418 48.6342C58.5369 48.1048 58.2761 47.6189 57.8928 47.2389L44.3664 33.7124L30.8399 47.2389C30.3967 47.7564 30.1651 48.4221 30.1914 49.103C30.2177 49.7838 30.5 50.4297 30.9817 50.9115C31.4635 51.3933 32.1094 51.6755 32.7903 51.7018C33.4711 51.7281 34.1368 51.4965 34.6544 51.0533L41.6611 44.1548V77.2947C41.6611 78.0121 41.9461 78.7002 42.4534 79.2076C42.9608 79.7149 43.6489 79.9999 44.3664 79.9999C45.0838 79.9999 45.7719 79.7149 46.2793 79.2076C46.7866 78.7002 47.0716 78.0121 47.0716 77.2947V44.1548L54.0242 51.1074C54.5392 51.6039 55.2298 51.8763 55.945 51.8649Z" fill="#0F4A7B"/>
                            </svg>
                          <span class="text-primary-blue text-center font-gilroy-bold">
                            Drag and drop your CV here <br /> or<br />
                            <span class="text-gray-300 font-gilroyd-bold px-8 py-2 rounded-lg text-center mt-2 block bg-primary-blue">Browse files</span>
                          </span>
                      </label>
                      <input id="file-upload" type="file" name="title" placeholder="Enter project title" class="w-full px-6 py-2.5 outline-none border custombreakpoint:py-3" />
                    </div>
                    </div>
                    <div class="form-element w-full mt-12 mb-20">
                        <button type="submit" class="text-center w-full font-gilroy-bold text-gray-300 py-3.5 bg-primary-blue">Submit Application</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </teleport>
        
  </div>
</template>

<script setup>

import { ref } from 'vue';

// reactive variables
const showFormModal = ref(false);

const props = defineProps({
    num:{
        type: Number,
        default: 1
    },
});
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
.form-modal-overlay{
    background: rgba(0, 0, 0, .7);
    z-index: 1000;
}
input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #0F4A7B;
    border-radius: .5rem;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20rem;
    background: white;
}
</style>