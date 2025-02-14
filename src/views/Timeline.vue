<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {

    // Create a gsap timeline
    const t1 = gsap.timeline({
        defaults: {
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,  // Repeat indefinitely
            repeatDelay: 0  // How long before animation repeats
        }
    });

    // Add tweens to the timeline
    // The timeline will run the tweens in sequence, with the offset
    // between each tween determined by final property in the to() method
    t1.to('#cr1', { x: 500 });
    t1.to('#cr2', { x: 461.94, y: -191.64 }, '<0.25');
    t1.to('#cr3', { x: 353.55, y: -353.56 }, '<0.25');
    t1.to('#cr4', { x: 191.34, y: -461.94 }, '<0.25');
    t1.to('#cr5', { y: -500 }, '<0.25');
    t1.to('#cr6', { x: -191.35, y: -461.94 }, '<0.25');
    t1.to('#cr7', { x: -353.55, y: -353.56 }, '<0.25');
    t1.to('#cr8', { x: -461.94, y: -191.34 }, '<0.25');

});
</script>

<template>
    <svg height="800px" width="800px" > 
        <g id="circles" fill="yellow">
            <circle id="cr1" cx="200" cy="300" r="24"/>
            <circle id="cr2" cx="219.03" cy="395.67" r="24"/>
            <circle id="cr3" cx="273.23" cy="476.78" r="24"/> 
            <circle id="cr4" cx="354.33" cy="530.97" r="24"/>
            <circle id="cr5" cx="450" cy="550" r="24"/>
            <circle id="cr6" cx="545.67" cy="530.97" r="24"/>
            <circle id="cr7" cx="626.78" cy="476.78" r="24"/>
            <circle id="cr8" cx="680.97" cy="395.67" r="24"/>
        </g>
        <g id="lines" stroke="white">
            <line x1="200" y1="300" x2="700" y2="300"/>
            <line x1="450" y1="50" x2="450" y2="550"/>
            <line x1="680.97" y1="395.67" x2="219.03" y2="204.03"/>
            <line x1="626.78" y1="123.22" x2="273.23" y2="476.78"/>
            <line x1="545.67" y1="69.03" x2="354.33" y2="530.97"/>
            <line x1="273.23" y1="123.22" x2="626.78" y2="476.78"/>
            <line x1="219.03" y1="395.67" x2="680.97" y2="204.03"/>
            <line x1="354.32" y1="69.03" x2="545.67" y2="530.97"/>
        </g>
        </svg>
</template>

<style scoped></style>