<template>
  <c-scroll class="c-index-list">
    <ul>
      <li class="group" v-for="group in data" :key="group.title">
        <h2 class="title">{{ group.title }}</h2>
        <ul>
          <li class="item" v-for="item in group.list" :key="item.id">
            <img v-lazy="item.pic" alt="" class="avatar" />
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </c-scroll>
</template>

<script setup>
import { defineProps } from 'vue'
import CScroll from '@/components/base/c-scroll'

defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.c-index-list {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .group {
    padding-bottom: 30px;
    background-color: #fff;

    .title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      /* color: $color-text-l; */
      color: #fff;
      /* background: $color-background; */
      background: $color-theme;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      background-color: #fff;
      border-bottom: 1px solid #f2f2f2;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
}
</style>
