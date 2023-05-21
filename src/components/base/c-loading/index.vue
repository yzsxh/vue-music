<template>
  <div class="c-loading">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif" alt="" />
      <p class="desc">{{ title }}</p>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
// const title = ref('正在载入...')
// const setTitle = (_title) => {
//   title.value = _title
// }

export default {
  data() {
    return {
      title: '正在载入...'
    }
  },
  methods: {
    setTitle(_title) {
      this.title = _title
    }
  }
}
</script>

<style lang="scss" scoped>
.c-loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>
