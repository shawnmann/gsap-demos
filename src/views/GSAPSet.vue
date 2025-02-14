<script setup lang="ts">
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const svgContainer = ref<SVGElement | null>(null);

class Triangle {
    constructor(public id: string, 
        public x_1: number, 
        public y_1: number, 
        public x_2: number, 
        public y_2: number, 
        public x_3: number, 
        public y_3: number, 
        public fill: string) {
    }

    draw() {
        if (!svgContainer.value) return;

        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('id', this.id);
        polygon.setAttribute('class', 'trg');
        polygon.setAttribute('points', `${this.x_1},${this.y_1} ${this.x_2},${this.y_2} ${this.x_3},${this.y_3} ${this.x_1},${this.y_1}`);
        polygon.setAttribute('fill', this.fill);

        svgContainer.value.appendChild(polygon);
    }
}

onMounted(() => {

    // Create the triangles
    let y1 = 60.6, y2 = 70.7, y3 = 70.7;
    let quantRow = 15, quantColumn = 27;
    let stepX = 30, stepY = 30;
    let i = 0;
    for (let j = 0; j < quantRow; j++) {
        let x1 = 77.9, x2 = 61.7, x3 = 94;
        let angle = -90;
        for (let k = 0; k < quantColumn; k++) { 
            i++;
            new Triangle("trg" + i, x1, y1, x2, y2, x3, y3, "yellow").draw();
            gsap.set("#trg" + i, {
                transformOrigin:"-50% -50%", 
                rotate: angle
            }); 
            angle += 13.3;
            x1 += stepX;
            x2 += stepX;
            x3 += stepX;
        }
        y1 += stepY;
        y2 += stepY;
        y3 += stepY;
    }

    gsap.to(".trg", {
        duration: 5000, 
        rotate: 360000,
        repeat: -1,
        ease: "linear",
        stagger: -0.005
    });

});
</script>

<template>
    <svg ref="svgContainer" id="svgContainer" height="600px" width="800px" > 
    </svg>
</template>

<style scoped></style>