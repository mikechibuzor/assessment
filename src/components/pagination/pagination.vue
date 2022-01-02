<template>
   <div class="navigation-numbering px-4 xl:px-24 flex items-center mt-10 ">
        <div class="wp flex ">
          <div class="numbers flex">
            <div v-for="x in 4" :key="x" :class="{ 'bg-blue-800': x === 1, 'text-white': x===1}" class="number font-gilroy-regular text-center bg-white border border-primary-blue py-1 xl:py-1.5 text-primary-blue shadow-sm px-1.5 xl:px-2 w-8 xl:w-10 text-sm items-center flex justify-center mr-2 xl:mr-5  rounded cursor-pointer ">
              {{ x }}
            </div>
          </div>
          <div class="next bg-white border border-primary-blue  py-1 xl:py-2.5 px-1.5 xl:px-3 w-8 xl:w-10 rounded mr-2 xl:mr-5 cursor-pointer">
            <div class="icon h-full w-full flex items-center justify-center">
                <svg class="h-3 w-3" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.51328 9.50134L6.4889 5.49866L1.50896 1.50134" stroke="#0F4A7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>