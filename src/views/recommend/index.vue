<template>
  <div class="recommend">recommend</div>
</template>

<script setup>
import { getRecommend } from '@/service/recommend'
import { onMounted } from 'vue'

onMounted(async () => {
  const result = await getRecommend()
  console.log(result)
})
</script>

<style lang="scss" scoped></style>
