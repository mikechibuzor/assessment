<template>
    <div class="hamburger-container block xl:hidden">
        <div ref="btn" class="btn" @click="hamburgerHandler">
        <div class="burger"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// reactive variable
const btn = ref(null);
// methods 
const hamburgerHandler = ()=>{
     btn.value.classList.toggle('open');  
}
</script>

<style scoped>
.hamburger-container{
    position: absolute;
    right: 1rem;
    top: 1rem;
}
.btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all .2s ease-in;
    z-index: 500;
}

.burger {
    width: 75%;
    height: .2rem;
    background-color: white;
    border-radius: 5px;
    transition: all .2s ease-in;
}

.burger::before,
.burger::after {
    content: "";
    position: absolute;
    width: 75%;
    height: .2rem;
    background-color: white;
    border-radius: .4rem;
    transition: all .2s ease-in;
}

.burger::after {
    transform: translateY(.5rem);
}

.burger::before {
    transform: translateY(-.5rem);
}

/* Animation */
.btn.open .burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
}

.btn.open .burger::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.btn.open .burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
}

</style>