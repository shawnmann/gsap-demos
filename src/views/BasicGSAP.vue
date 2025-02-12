<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const target = ref<HTMLElement | null>(null);

onMounted(() => {
    if (target.value) {
        gsap.to(target.value, {
            delay: 1,  // Start after this many seconds
            duration: 2,  // Animation duration in seconds
            x: 100,  // Move 100px to the right
            y: 100,  // Move 100px down
            rotation: 360,  // Rotate 360 degrees
            scale: 0.5,  // Scale to 50%
            ease: 'elastic',  // Easing function
            onComplete: () => {
                console.log('Animation completed!');
            }
        });
    }
});
</script>

<template>
    <h1 ref="target">BASIC GSAP!</h1>
</template>

<style></style>