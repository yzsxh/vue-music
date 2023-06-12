<template>
  <div class="singer" v-loading="!singers.length">
    <c-index-list :data="singers"></c-index-list>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CIndexList from '@/components/base/c-index-list'
import { getSingerList } from '@/service/singer'

const singers = ref([])

onMounted(async () => {
  const res = await getSingerList()
  singers.value = res.singers
})
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
