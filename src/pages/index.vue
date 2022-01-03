<template>
  <div class="wrapper bg-[#F9FBFD]">
    <section class="header relative">
      <the-header></the-header>

      <div class="text px-4 xl:px-24 pt-14 pb-24 bg-primary-blue">
        <h1 class="text-white font-gilroy-bold text-xl xl:text-[40px] tracking-widest">Find Your Dream Job</h1>
      </div>

      <!-- search form -->
      <div class="form absolute px-4 xl:px-24 -bottom-7 w-full left-0">
        <form action="" class="relative w-full">
         <div class="form-group bg-white grid xl:grid-cols-2 py-2  shadow-md rounded-md ">
          <div class="form-element border-r border-[#62BECB] px-6 flex items-center">
            <label for="job" class="mr-5">
              <svg class="xl:h-5 h-4 xl:w-5 w-4" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 23.6925L18.0167 16.7091C19.6948 14.6945 20.5316 12.1104 20.3531 9.49452C20.1745 6.8786 18.9943 4.43223 17.058 2.66432C15.1216 0.896406 12.5782 -0.0569296 9.95692 0.00263186C7.33559 0.0621934 4.83814 1.13007 2.9841 2.9841C1.13007 4.83814 0.0621934 7.33559 0.00263186 9.95692C-0.0569296 12.5782 0.896406 15.1216 2.66432 17.058C4.43223 18.9943 6.8786 20.1745 9.49452 20.3531C12.1104 20.5316 14.6945 19.6948 16.7091 18.0167L23.6925 25L25 23.6925ZM1.88247 10.2048C1.88247 8.55878 2.37056 6.94975 3.28503 5.58115C4.1995 4.21256 5.49927 3.14586 7.01997 2.51597C8.54067 1.88607 10.214 1.72126 11.8284 2.04238C13.4428 2.3635 14.9256 3.15612 16.0895 4.32002C17.2534 5.48391 18.0461 6.96681 18.3672 8.58118C18.6883 10.1955 18.5235 11.8689 17.8936 13.3896C17.2637 14.9103 16.197 16.2101 14.8284 17.1245C13.4598 18.039 11.8508 18.5271 10.2048 18.5271C7.99832 18.5246 5.88293 17.647 4.32272 16.0868C2.76252 14.5266 1.88492 12.4112 1.88247 10.2048Z" fill="#62BECB"/>
              </svg>
            </label>
            <input type="text" name="job" id="job" class="w-full py-2 outline-none border-none" placeholder="Front end developer" />
          </div>
          <div class="form-element px-6 flex items-center">
            <label for="location" class="mr-5">
              <svg class="xl:h-5 h-4 xl:w-5 w-4" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29184 5.87744C8.61552 5.87744 7.95439 6.07799 7.39206 6.45374C6.82972 6.82948 6.39143 7.36354 6.13261 7.98837C5.8738 8.61321 5.80608 9.30076 5.93802 9.96408C6.06996 10.6274 6.39564 11.2367 6.87387 11.7149C7.3521 12.1932 7.9614 12.5188 8.62473 12.6508C9.28805 12.7827 9.9756 12.715 10.6004 12.4562C11.2253 12.1974 11.7593 11.7591 12.1351 11.1968C12.5108 10.6344 12.7114 9.97329 12.7114 9.29697C12.7103 8.39037 12.3497 7.5212 11.7087 6.88014C11.0676 6.23908 10.1984 5.87847 9.29184 5.87744ZM9.29184 11.0067C8.95368 11.0067 8.62312 10.9065 8.34195 10.7186C8.06078 10.5307 7.84163 10.2637 7.71223 9.95127C7.58282 9.63885 7.54896 9.29507 7.61493 8.96341C7.6809 8.63175 7.84374 8.3271 8.08286 8.08798C8.32197 7.84887 8.62662 7.68603 8.95828 7.62006C9.28995 7.55409 9.63372 7.58795 9.94614 7.71735C10.2586 7.84676 10.5256 8.06591 10.7135 8.34707C10.9013 8.62824 11.0016 8.95881 11.0016 9.29697C11.0011 9.75026 10.8208 10.1848 10.5002 10.5054C10.1797 10.8259 9.74514 11.0062 9.29184 11.0067Z" fill="#62BECB"/>
                <path d="M15.8628 2.72094C14.2381 1.09668 12.0694 0.131811 9.77514 0.0125409C7.48091 -0.106729 5.22382 0.628058 3.43949 2.07509C1.65516 3.52212 0.470078 5.57881 0.112978 7.84821C-0.244123 10.1176 0.252067 12.4389 1.50578 14.3639L7.96586 24.2813C8.10962 24.5019 8.30618 24.6833 8.53773 24.8088C8.76928 24.9343 9.02849 25 9.29186 25C9.55523 25 9.81444 24.9343 10.046 24.8088C10.2775 24.6833 10.4741 24.5019 10.6179 24.2813L17.0781 14.3639C18.2415 12.5782 18.7556 10.4468 18.5343 8.32701C18.313 6.20725 17.3698 4.22798 15.8628 2.72094ZM15.6456 13.4307L9.29189 23.1843L2.93814 13.4307C0.993282 10.4451 1.41041 6.44956 3.92996 3.9299C4.63409 3.22575 5.47002 2.66718 6.39003 2.2861C7.31003 1.90501 8.29608 1.70887 9.29189 1.70887C10.2877 1.70887 11.2737 1.90501 12.1937 2.2861C13.1138 2.66718 13.9497 3.22575 14.6538 3.9299C17.1734 6.44956 17.5904 10.4451 15.6456 13.4307Z" fill="#62BECB"/>
              </svg>
            </label>
            <input type="text" name="job" id="location" class="w-full py-2 outline-none border-none pr-28" placeholder="Lagos, Nigeria" />
          </div>
      
         </div>
          <div class="form-element absolute left-0 -bottom-8 xl:left-[88%] xl:bottom-0 xl:top-0 flex items-center justify-end pr-5">
            <button type="submit" class="bg-secondary-orange text-gray-200 px-4 py-1.5 xl:px-8 xl:py-2 text-sm xl:text-base font-gilroy-regular rounded-md">
              Search
            </button>
          </div>
        </form>
      </div>

      
    </section>

    <!-- main -->
    <main class="bg-[#F9FBFD] grid xl:grid-cols-2 gap-8 px-4 xl:px-24 pt-24 ">
      <!-- left aside -->
      <aside class="left-aside">
        <div class="top flex items-center justify-between mb-8">
          <p class="font-gilroy">Showing 68 results</p>
          <div class="select flex">
            <label for="sort" class="text-gray-500">Sort by:</label>
            <select name="sort" id="sort" class="bg-transparent cursor-pointer">
              <option value="latest">Latest</option>
              <option value="latest">Latest</option>
              <option value="latest">Latest</option>
            </select>
          </div>
        </div>
        <single-job v-for="job in state.allJobs" :job="job" :key="job.id" :active="activeJobContainer" @toggleActive="toggleActiveJobContainer"></single-job>
      </aside>

      <!-- right aside -->
      <aside class="right-aside">
        <!-- job details -->
        <job-details :unique="activeJobContainer"></job-details>
      </aside>
    </main>

    <!-- pagination -->
    <pagination />

    <!-- footer -->
    <footer class="px-4 xl:px-24 py-12 grid gap-14 xl:gap-0 justify-center xl:flex xl:justify-between bg-primary-blue mt-20">
      <section class="one">
        <the-logo></the-logo>
        <p class="text-sm text-gray-300 mt-4">© 2021 FindJobs</p>
      </section>
      <section class="two flex">
        <ul class="mr-32">
          <li class="mb-2">
            <router-link to="/" class="text-white mb-4 font-gilroy-bold text-xl">Quick Links</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">Home</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">About</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">Calendar</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">Terms and Condition</router-link>
          </li>
        </ul>
        <ul>
          <li class="mb-2">
            <router-link to="/" class="text-white mb-4 font-gilroy-bold text-xl">Quick Links</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">Home</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">About</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">Calendar</router-link>
          </li>
          <li>
            <router-link to="/" class="text-gray-300 block mb-2 font-gilroy-regular text-lg">Terms and Condition</router-link>
          </li>
        </ul>
      </section>
      <section class="media-links">
        <h4 class="font-gilroy-regular text-2xl mb-1 text-center text-gray-300">Social Media</h4>
        <div class="icons flex justify-center gap-3">
          <div class="instagram rounded-full bg-blue-600 h-12 w-12 cursor-pointer flex items-center justify-center">
            <router-link to="instagram.com" >
              <svg class="h-4 w-4" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.58371 3.8978C6.23315 3.8978 4.33718 5.72933 4.33718 8C4.33718 10.2707 6.23315 12.1022 8.58371 12.1022C10.9343 12.1022 12.8302 10.2707 12.8302 8C12.8302 5.72933 10.9343 3.8978 8.58371 3.8978ZM8.58371 10.667C7.06472 10.667 5.82291 9.47094 5.82291 8C5.82291 6.52906 7.06102 5.33304 8.58371 5.33304C10.1064 5.33304 11.3445 6.52906 11.3445 8C11.3445 9.47094 10.1027 10.667 8.58371 10.667ZM13.9944 3.73C13.9944 4.26197 13.5509 4.68682 13.0039 4.68682C12.4533 4.68682 12.0134 4.2584 12.0134 3.73C12.0134 3.20161 12.4569 2.77318 13.0039 2.77318C13.5509 2.77318 13.9944 3.20161 13.9944 3.73ZM16.807 4.7011C16.7441 3.41939 16.4411 2.28406 15.4691 1.34866C14.5007 0.413254 13.3255 0.120495 11.9987 0.0562312C10.6312 -0.0187437 6.53251 -0.0187437 5.16505 0.0562312C3.84194 0.116925 2.66666 0.409684 1.69466 1.34509C0.722651 2.28049 0.423288 3.41582 0.356763 4.69753C0.27915 6.01852 0.27915 9.97791 0.356763 11.2989C0.419592 12.5806 0.722651 13.7159 1.69466 14.6513C2.66666 15.5867 3.83825 15.8795 5.16505 15.9438C6.53251 16.0187 10.6312 16.0187 11.9987 15.9438C13.3255 15.8831 14.5007 15.5903 15.4691 14.6513C16.4374 13.7159 16.7404 12.5806 16.807 11.2989C16.8846 9.97791 16.8846 6.02209 16.807 4.7011ZM15.0403 12.7163C14.7521 13.416 14.194 13.9551 13.4659 14.2372C12.3756 14.6549 9.78855 14.5585 8.58371 14.5585C7.37886 14.5585 4.78808 14.6513 3.7015 14.2372C2.97711 13.9587 2.41904 13.4196 2.12707 12.7163C1.69466 11.6631 1.79445 9.1639 1.79445 8C1.79445 6.8361 1.69835 4.33337 2.12707 3.28372C2.41535 2.58396 2.97342 2.04485 3.7015 1.7628C4.79177 1.34509 7.37886 1.44148 8.58371 1.44148C9.78855 1.44148 12.3793 1.34866 13.4659 1.7628C14.1903 2.04128 14.7484 2.58039 15.0403 3.28372C15.4728 4.33694 15.373 6.8361 15.373 8C15.373 9.1639 15.4728 11.6666 15.0403 12.7163Z" fill="white"/>
              </svg>
            </router-link>
          </div>
          <div class="facebook rounded-full bg-blue-600 h-12 w-12 cursor-pointer flex items-center justify-center">
            <router-link to="facebook.com">
              <svg class="h-4 w-4" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.64266 20.4883V10.2429H9.28359L9.63356 6.71234H6.64266L6.64715 4.94524C6.64715 4.02441 6.72885 3.531 7.96387 3.531H9.61487V0H6.97357C3.80095 0 2.68427 1.71272 2.68427 4.59298V6.71274H0.706665V10.2433H2.68427V20.4883H6.64266Z" fill="white"/>
              </svg>
            </router-link>
          </div>
          <div class="twitter rounded-full bg-blue-600 h-12 w-12 cursor-pointer flex items-center justify-center">
            <router-link to="twitter.com">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1335 4.65914L9.09658 4.0075C8.98587 2.31866 9.95756 0.776073 11.4951 0.177712C12.0609 -0.0350808 13.0203 -0.0616799 13.6476 0.124513C13.8936 0.204311 14.361 0.470223 14.6931 0.709614L15.2958 1.14846L15.96 0.922407C16.3291 0.802672 16.8211 0.603218 17.0424 0.470223C17.2515 0.350566 17.436 0.284029 17.436 0.323967C17.436 0.55002 16.9809 1.32131 16.5996 1.74682C16.083 2.34526 16.2306 2.39846 17.2761 1.99947C17.9035 1.77342 17.9157 1.77342 17.7927 2.02607C17.7189 2.15907 17.3376 2.62451 16.9317 3.05002C16.2429 3.78145 16.206 3.86125 16.206 4.47295C16.206 5.4171 15.7878 7.38519 15.3696 8.46233C14.5947 10.4836 12.9342 12.5714 11.2737 13.6219C8.9367 15.0981 5.82474 15.4704 3.20485 14.606C2.33156 14.3134 0.830933 13.5687 0.830933 13.4358C0.830933 13.3959 1.28601 13.3427 1.83956 13.3294C2.99574 13.3028 4.15193 12.957 5.13594 12.3453L5.8002 11.9198L5.03754 11.6406C3.95513 11.2416 2.98344 10.324 2.73747 9.45968C2.66362 9.18043 2.68823 9.16709 3.37704 9.16709L4.09046 9.15383L3.48775 8.84798C2.77432 8.46233 2.12245 7.8107 1.80263 7.1458C1.5689 6.6671 1.27377 5.45696 1.35986 5.3639C1.38441 5.32404 1.64275 5.40376 1.93796 5.51015C2.78663 5.8426 2.89734 5.76281 2.40534 5.2043C1.48281 4.1937 1.19992 2.69097 1.64275 1.26812L1.85187 0.629816L2.66361 1.49417C4.32419 3.23621 6.27989 4.27349 8.51848 4.57934L9.1335 4.65914Z" fill="white"/>
              </svg>
            </router-link>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>

import { ref } from 'vue';

import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';

import TheHeader from '../components/header/TheHeader.vue';
import SingleJob from '../components/single-job/SingleJob.vue';
import pagination from '../components/pagination/pagination.vue';
import TheLogo from '../components/header/logo/TheLogo.vue';
import JobDetails from '../components/job-details/JobDetails.vue';

// accessing store
const store = useStore();

// reactive variable
const state = reactive({
  allJobs: null,
})
const activeJobContainer = ref(null);

// methods
const toggleActiveJobContainer = (uniqueId)=>{
  activeJobContainer.value = uniqueId;
}

// Lifecycle hooks
onMounted( 
  async ()=>{
    await store.dispatch('job/getAlljobs');
    state.allJobs = store.getters['job/getJobs'];
    console.log(state.allJobs);
    activeJobContainer.value = state.allJobs[0].id;
  })
</script>

<style scoped>


</style>
