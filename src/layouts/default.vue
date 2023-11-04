<template>
  <div>
    <Header></Header>
    <main class="min-h-[calc(100vh-80px)]">
      <slot />
    </main>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
