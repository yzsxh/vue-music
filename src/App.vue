<template>
  <div class="top">
    <div class="top-wrapper">
      <c-header />
      <c-tab />
    </div>
  </div>
  <router-view />
</template>

<script setup>
import CHeader from '@/components/c-header'
import CTab from '@/components/c-tab'
</script>

<style lang="scss">
.top {
  height: 88px;
  .top-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: $color-background;
  }
}
</style>
