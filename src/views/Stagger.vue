<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const svgContainer = ref<SVGElement | null>(null);
let timeline: gsap.core.Timeline;

class Circle {
    constructor(public id: string, 
        public cx: number, 
        public cy: number, 
        public r: number, 
        public stroke: string, 
        public strokeWidth: number, 
        public fill: string) {
    }

    draw() {
        if (!svgContainer.value) return;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('id', this.id);
        circle.setAttribute('cx', this.cx.toString());
        circle.setAttribute('cy', this.cy.toString());
        circle.setAttribute('r', this.r.toString());
        circle.setAttribute('stroke', this.stroke);
        circle.setAttribute('stroke-width', this.strokeWidth.toString());
        circle.setAttribute('fill', this.fill);
        circle.setAttribute('class', 'circle');

        svgContainer.value.appendChild(circle);
    }
}

onMounted(() => {
    if (!svgContainer.value) return;

    // Create a timeline to contain our tweens
    timeline = gsap.timeline({
        delay: 0,
        repeat: 2,
        repeatDelay: 2,
        defaults: {
            duration: 12,
            ease: 'power1.inOut'
        }
    });

    for (let i = 1; i <= 8; i++) {
        const circle = new Circle(
            `cr${i}`,  // id
            100 + (i * 50),  // x
            300,  // y
            24,  // radius
            'white',  // stroke color
            3,  // stroke width
            gsap.utils.random(['red', 'green', 'blue', 'yellow', 'purple'])  // fill color
        );
        circle.draw();
    }

    timeline.to('.circle', {
        //delay: 0,
        duration: 1, 
        x: '+=50', // Move relative to its current position
        y: 200, 
        rotation: 360,
        scale: 2, 
        fill: gsap.utils.random(['red', 'green', 'blue', 'yellow', 'purple']), 
        stroke: 'white', 
        strokeWidth: 10,
        stagger: 0.1  // Stagger the start time of each tween in this selector
    });

    timeline.pause()
});

const pause = () => timeline.pause();
const play = () => timeline.play();
const reverse = () => timeline.reverse();
const seek = () => timeline.seek(6);
const restart = () => timeline.restart();
</script>

<template>
    <div>
        <button @click="play">Play</button>
        <button @click="pause">Pause</button>
        <button @click="reverse">Reverse</button>
        <button @click="seek">Seek</button>
        <button @click="restart">Restart</button>
    </div>
    <svg ref="svgContainer" id="svgContainer" height="600px" width="800px"></svg>
</template>

<style scoped>
button {
    display: inline-block;
}
#svgContainer {
    border: solid 1px #fff;
}
</style>