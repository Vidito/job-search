<template>
  <img :src="imageLink" alt='user profile image' class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://cdn.pixabay.com/photo/2022/03/23/12/00/fruit-7087053_1280.png'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>