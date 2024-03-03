<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <div class="name">
          {{ mainStore.poemName }}
        </div>
        <div class="author">
          {{ mainStore.poemAuthor }}
        </div>
      </div>
      <div class="poem-container">
        <selector-item :lenght="selectorLength" @emit-selector-click="handleClick"></selector-item>
        <div class="poem-list">
          <transition-group name="anim-list">
            <div v-for="i in indexes" :key="i">
              {{ poem[i] }}
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectorItem from '@/components/SelectorItem.vue'
import { useMainStore } from '@/stores/mainStore.js'
import { mapStores } from 'pinia'

export default {
  components: {
    SelectorItem
  },
  data() {
    return {
      selectorLength: null,
      indexes: null
    }
  },
  methods: {
    handleClick(indexes) {
      this.indexes = indexes
    }
  },

  created() {
    this.selectorLength = this.mainStore.poem.length
    this.name = this.mainStore.name
    this.author = this.mainStore.author
    this.indexes = Array.from(Array(this.selectorLength).keys())
  },

  computed: {
    ...mapStores(useMainStore),

    poem() {
      return this.mainStore.poem
    }
  }
}
</script>

<style scoped lang="sass">

@media only screen and (min-width: 450px)
  .container
    font-size: 20px
    margin: 0 auto
    width: 100%

  .poem-container
    width: 45rem
    display: flex
    flex-direction: column


@media only screen and (min-width: 768px)
  .container
    font-size: 25px
    margin: 0 auto
    width: 500px
    flex-direction: column

  .poem-container
    width: 45rem
    flex-direction: column

@media only screen and (min-width: 992px)
  .container
    font-size: 30px
    margin: 0 auto
    width: 600px
  .poem-container
    width: 45rem
    flex-direction: row

@media only screen and (min-width: 1200px)
  .container
    font-size: 35px
    margin: 0 auto
    width: 800px

  .poem-container
    width: 45rem
    flex-direction: row

@media only screen and (min-width: 2700px)
  html
    zoom: 200%


@media only screen and (min-width: 8000px)
  html
    zoom: 400%


.header
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 40rem

.name
  font-weight: bold


.poem-list
  display: flex
  flex-direction: column

.poem-container
  display: flex

.anim-list-enter-active,
.anim-list-leave-active
  transition: all 0.5s ease

.anim-list-enter-from,
.anim-list-leave-to
  opacity: 0
  transform: translateX(30px)


@media (min-width: 450px)
</style>
