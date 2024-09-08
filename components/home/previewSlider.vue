<template>
    <div class="sliderContainer">
      <div ref="sliderWrapper" class="sliderWrapper">
        <!-- Duplicate items to create a seamless effect -->
        <div
          v-for="item in sliderContent"
          :key="item.title"
          class="sliderItem relative focus:outline-none overflow-y-auto scroll-py-1 divide-y divide-gray-200 dark:divide-gray-700 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800"
        >
          <!-- {{ item.title }} -->
        </div>
        <div
          v-for="item in sliderContent"
          :key="'duplicate-' + item.title"
          class="sliderItem relative focus:outline-none overflow-y-auto scroll-py-1 divide-y divide-gray-200 dark:divide-gray-700 ring-1 ring-gray-200 dark:ring-gray-700 rounded-md shadow-lg bg-white dark:bg-gray-800"
        >
          <!-- {{ item.title }} -->
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .sliderContainer {
    overflow: hidden;
    position: relative;
    width: 100%; /* Ensure the container takes full width */
  }
  
  .sliderWrapper {
    display: flex;
    flex-direction: row;
    white-space: nowrap; /* Ensure items stay in a single line */
    animation: scroll linear infinite; /* Ensure smooth, continuous scrolling */
    /* Duration to be set dynamically in JavaScript */
  }
  
  .sliderItem {
    flex: 0 0 auto;
    min-height: 22rem;
    min-width: 24rem;
    box-sizing: border-box;
    padding: 1rem;
    /* Retain your original styling */
    position: relative;
  }
  
  /* Optional: Add space between items if needed */
  .sliderItem + .sliderItem {
    margin-left: 1rem;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  const sliderContent = [
    { title: "AI-Generated Headshots" },
    { title: "AI-Generated Headshots" },
    { title: "AI-Generated Headshots" },
    { title: "AI-Generated Headshots" },
    { title: "AI-Generated Headshots" },
    { title: "AI-Generated Headshots" },
  ];
  
  const sliderWrapper = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    if (sliderWrapper.value) {
      const wrapper = sliderWrapper.value;
      const itemWidth = wrapper.children[0].clientWidth; // Get the width of one item
      const totalWidth = wrapper.scrollWidth; // Total width of all items combined
  
      // Ensure at least one duplicate set is visible
      wrapper.style.setProperty('width', `${totalWidth}px`);
  
      // Calculate animation duration based on totalWidth and desired speed
      const animationDuration = totalWidth / 200; // Adjust speed here (30 is speed factor)
      wrapper.style.setProperty('animation-duration', `${animationDuration}s`);
  
      // Adjust keyframes dynamically to ensure continuous scrolling
      const styleSheet = document.createElement('style');
      document.head.appendChild(styleSheet);
      styleSheet.sheet?.insertRule(`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth / 2}px); } /* Move to half of the width of all items */
        }
      `, 0);
    }
  });
  </script>
  