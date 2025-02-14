<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const svgContainer = ref<SVGElement | null>(null);

onMounted(() => {
    if (!svgContainer.value) return;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '40');
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('fill', 'red');

    svgContainer.value.appendChild(circle);
});
</script>

<template>
    <svg ref="svgContainer" id="svgContainer" height="600px" width="800px" ></svg>
</template>

<style scoped>
#svgContainer {
    border: solid 1px #fff;
}
</style>