<template>
    <div class="heroWrapper">
      <div class="hero">
        <div class="heroTextWrapper">
          <div class="smallHeader">
            <h1 class="text-cool">Top-Tier AI-Created Headshots</h1>
          </div>
          <div class="text-6xl">
            <span class="text-primary">Exceptional headshots</span><br> for thriving professionals
          </div>
          <div class="text-2xl font-thin">
            <p>Stand out on LinkedIn, Twitter, and beyond. Upload a few photos and receive numerous headshot options, all from the convenience of your home.</p>
          </div>
        </div>
        <div class="heroAction">
          <UButton size="xl" :trailing="true" icon="ooui:arrow-next-ltr" href="#">
         Generate My Headshots</UButton>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  let props = defineProps<{
  
  }>();
  </script>
  <style lang="css">
  .heroWrapper {
    margin: 8rem 20rem;
    display: flex;
    align-items: center;
  }
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2rem;
    text-align: center;
  }
  .heroTextWrapper {
      display: flex;
      flex-direction: column;
      gap:1rem;
  }
  </style>
  