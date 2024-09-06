<template>
  <div>
    <nav class="navbar">
      <div>Studio.AI</div>
      <div class="flex gap-2">
        <UDropdown
          width="48rem"
          :items="items"
          :ui="{
            width: 'w-78',
          }"
          :popper="{ placement: 'bottom-start' }"
        >
          <UButton
            variant="ghost"
            label="Photo Types"
            trailing-icon="i-heroicons-chevron-down-20-solid"
          />

          <!-- # Custom button for dropdown 1 -->
          <template #proHeadshot="{ item }">
          
              <div class="customUiButton">
                <div class="grid">
                  <img
                    class="dropImage"
                    src="/images/headshot-1-square.png"
                    alt="Professional Headshot Image"
                  />
                </div>
                <div class="text-left flex flex-col justify-around">
                  <h3 class="text font-bold">Professional Headshots</h3>
                  <p class="text-xs">
                    Get a professional headshot for your profile
                  </p>
                </div>
              </div>
           
          </template>

          <!-- # Custom button for dropdown 2 -->
          <template #linkedinShot="{ item }">
    
              <div class="customUiButton text-slate-100">
                <div class="grid">
                  <img
                    class="dropImage"
                    src="/images/headshot-2-woman-square.png"
                    alt="Professional Headshot Image"
                  />
                </div>
                <div class="text-left flex flex-col justify-around">
                  <h3 class="text font-bold">Linkedin Headshots</h3>
                  <p class="text-xs">
                    <!-- content relative to linkedin headshot -->
                    <p>Spice up your linked in profile with some professionalism!</p>
                
                  </p>
                </div>
              </div>
        
          </template>
        </UDropdown>
        <UButton variant="ghost">Pricing</UButton>
        <UButton variant="ghost">For Companies</UButton>
      </div>
      <div class="flex gap-2">
        <UButton variant="ghost" icon="carbon:earth-americas-filled"></UButton>
        <UButton variant="outline">Log In</UButton>
        <UButton>Create My Headshots</UButton>
      </div>
    </nav>
    <slot />
  </div>
</template>
<style scoped>
.customUiButton {
  display: flex;
  gap: 1rem;
}
.dropImage {
  width: 60px;
  height: 60px;
  object-fit: fill;
}
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 20rem;
}
</style>
<script lang="ts" setup>
const items = [
  [
    {
      slot: "proHeadshot",
      label: "Professional Headshots",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
    {
      slot: "linkedinShot",
      label: "Linkedin Headshots",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
];
</script>
