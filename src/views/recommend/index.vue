<template>
  <div class="recommend" v-loading:[loadingText]="loading">
    <c-scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <c-slider v-if="sliders.length" :sliders="sliders" />
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li v-for="item in albums" class="item" :key="item.id">
              <div class="icon">
                <img v-lazy="item.pic" alt="" width="60" height="60" />
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{ item.title }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </c-scroll>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import CSlider from '@/components/base/c-slider'
import CScroll from '@/components/base/c-scroll'
import { getRecommend } from '@/service/recommend'

const sliders = ref([])
const albums = ref([])
const loadingText = ref('加载中')
const loading = computed(() => {
  return !sliders.value.length && !albums.value.length
})

onMounted(async () => {
  const result = await getRecommend()
  sliders.value = await result.sliders
  albums.value = await result.albums
})
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 10px 20px 10px;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
