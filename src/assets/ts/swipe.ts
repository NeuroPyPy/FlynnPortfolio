// swipeslides.js
import type { Ref } from 'vue';
import { ref, onMounted } from 'vue';
let activeIndex = ref(0);
export function useSwipe(parentNodes: number, side: string) {
    let nodeLength = parentNodes;
    if (side === 'left') {

        var nextIndex =
            activeIndex.value - 1 >= 0 
            ? activeIndex.value - 1 
            : nodeLength - 1;
        var currentstatus = 'on-right'; 
        var nextstatus = 'go-left';

    } else if (side === 'right') {
        var nextIndex: number =
            activeIndex.value + 1 <= nodeLength - 1 
            ? activeIndex.value + 1 
            : 0;

        var currentstatus = 'on-left';
        var nextstatus = 'go-right';

    } else {
        console.log('no side');
        nextIndex = 0;
        currentstatus = 'null';
        nextstatus = 'null';
    }

    const currentSlide: HTMLElement = document.querySelector(
        `[data-index="${activeIndex.value}"]`
    )!;

    const nextSlide: HTMLElement = document.querySelector(
        `[data-index="${nextIndex}"]`
    )!;

    currentSlide.dataset.status = currentstatus;
    nextSlide.dataset.status = nextstatus;

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        activeIndex.value = nextIndex;
    });
    }
