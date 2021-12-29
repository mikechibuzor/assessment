<template>
  <nav>
      <!-- nav-lists desktop -->
      <ul class="hidden xl:flex items-center text-sm font-gilroy">
          <li class="px-4">
              <a href="#" class="text-white font-bold">Jobs</a>
          </li>
          <li class="px-4">
              <a href="#" class="text-[#FFFFFF99] cursor-not-allowed">Company Review</a>
          </li>
          <li class="px-4">
              <a href="#" class="text-[#FFFFFF99] cursor-not-allowed">Find Salaries</a>
          </li>
          <li class="">
              <button class="px-4 py-2 rounded text-primary-blue transition-all duration-300 transform hover:translate-y-0.5 bg-[#FFEDED]">Post Job</button>
          </li>
      </ul>

      <transition name="slide-fade">
        <!-- nav-lists mobile -->
        <ul v-if="showMenu" class="fixed w-full shadow-sm bg-[#C6E3E8] left-0 top-16 flex flex-col  text-sm font-gilroy py-4">
            <li class="px-4 mb-3">
                <a href="#" class="text-gray-900 font-bold">Jobs</a>
            </li>
            <li class="px-4 mb-3">
                <a href="#" class="text-gray-400 cursor-not-allowed">Company Review</a>
            </li>
            <li class="px-4 mb-3">
                <a href="#" class="text-gray-400 cursor-not-allowed">Find Salaries</a>
            </li>
            <li class="px-4">
                <button class="px-4 py-2 rounded text-white transition-all duration-300 transform hover:translate-y-0.5 bg-secondary-orange">Post Job</button>
            </li>
        </ul>
      </transition>
      <hamburger-button @click="showMenuHandler"></hamburger-button>
  </nav>
</template>

<script setup>

import { ref } from 'vue';
import HamburgerButton from './hamburger-button/HamburgerButton.vue';

// reactive variables
const showMenu = ref(false);

// 
const showMenuHandler = ()=>{
    showMenu.value = !showMenu.value;
}
</script>

<style scoped>

.slide-fade-enter-active{
    animation: slide-fade .3s linear forwards;
}
.slide-fade-leave-active{
    animation: slide-fade .3s linear alternate-reverse;
}

/* animation for show nav */
@keyframes slide-fade{
    0%{
        opacity: 0;
        transform: translateY(-20%);
    }
    70%{
        opacity: 0.7;
        transform: translateY(10%);
    }
    100%{
        opacity: 1;
        transform: translateY(0%);
    }
}

</style>