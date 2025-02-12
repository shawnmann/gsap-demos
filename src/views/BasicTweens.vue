<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const rect = ref<SVGRectElement | null>(null);

onMounted(() => {
    if (rect.value) {
        gsap.to(rect.value, {
            delay: 1,
            duration: 3,
            rotate: 2880,
            skewX: 45,
            fill: 'goldenrod',
            ease: 'power1.in'
        });
    }
});
</script>

<template>
    <svg width="900" height="650">
        <rect ref="rect" x="400" y="300" width="100" height="100" fill="indigo" stroke="black" />
    </svg>
</template>

<style></style>