<script setup>
import { onMounted, onUnmounted, onUpdated, ref, inject } from 'vue'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import {tooltipOptionsInject} from './index'

const props = defineProps({
  text: { type: String, required: true },
  options: { type: Object, default: () => ({})}
});

const tooltip = ref(null);

let tippyInstance = null;

function initTippy() {
    if (tippyInstance) tippyInstance.destroy();

    tippyInstance = tippy(tooltip.value.parentNode, {
        ...inject(tooltipOptionsInject),
        content: props.text,
        ...props.options
    });
}

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted(() => tippyInstance && tippyInstance.destroy())
</script>

<template>
    <span ref="tooltip"></span>
</template>