<template>
  <main>
    <section class="flex flex-col h-screen bg-green-100 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">Column 1</div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          <TheHeadline />
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">Column 3</div>
        <div class="col-start-12 col-span-1 border border-blue-700">Column4</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue'
export default {
  name: 'TheHero',
  components: {
    TheHeadline
  }
}
</script>

<style scoped></style>
