<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const svgContainer = ref<SVGElement | null>(null);
const rows = 10;
const cols = 14;

class Square {
    constructor(public id: string, 
        public x: number, 
        public y: number, 
        public width: number, 
        public height: number, 
        public fill: string) {
            if (!svgContainer.value) return;

            const square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            square.setAttribute('id', this.id);
            square.setAttribute('x', this.x.toString());
            square.setAttribute('y', this.y.toString());
            square.setAttribute('width', this.width.toString());
            square.setAttribute('height', this.height.toString());
            square.setAttribute('fill', this.fill);
            square.setAttribute('class', 'square');

            svgContainer.value.appendChild(square);
    }
}

onMounted(() => {
    if (!svgContainer.value) return;

    // Create a timeline to contain our tweens
    const timeline = gsap.timeline({
        delay: 0,
        repeat: -1,
        repeatDelay: 1,
        defaults: {
            duration: 0.5,
            ease: 'power2.inOut'
        }
    });

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const square = new Square(
                `sq${i}${j}`,  // id
                10 + (j * 50),  // x
                10 + (i * 50),  // y
                20,  // width
                20,  // height
                gsap.utils.random(['red', 'green', 'blue', 'yellow', 'purple'])  // fill color
            );
        }
    }

    const squares = document.querySelectorAll('.square');
    timeline.to('.square', {
        scale: 0,
        stagger: {
            amount: 1,
            grid: [rows, cols],
            from: 'center'
        },
        delay: 1
    });
});
</script>

<template>
    <svg ref="svgContainer" id="svgContainer" width="800px" height="600px"></svg>
</template>

<style scoped>
#svgContainer {
    border: solid 1px #fff;
}
</style>