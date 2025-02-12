<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const to = ref<HTMLElement | null>(null);
const from = ref<HTMLElement | null>(null);
const fromTo = ref<HTMLElement | null>(null);

onMounted(() => {
    gsap.to(to.value, {
        duration: 3,
        delay: 1,
        x: 400,
        repeat: -1
    });
    gsap.from(from.value, {
        duration: 3,
        delay: 1,
        x: 400,
        repeat: -1
    });
    gsap.fromTo(fromTo.value, {
        duration: 3,
        delay: 1,
        x: 400,
        repeat: -1
    }, {
        duration: 3,
        delay: 1,
        x: 0,
        repeat: -1
    });
});
</script>

<template>
    <div>
        <div class="to" ref="to">gsap.to()</div>
        <div class="from" ref="from">gsap.from()</div>
        <div class="fromto" ref="fromTo">gsap.fromTo()</div>
    </div>
</template>

<style scoped>
div {
    width: 100px;
    height: 100px;
}

.to {
    background-color: lightcoral;
}

.from {
    background-color: lightgreen;
}

.fromto {
    background-color: lightblue;
}
</style>