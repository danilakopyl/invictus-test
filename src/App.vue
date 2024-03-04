<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <selector-item :lenght="selectorLength" @emit-selector-click="handleClick"></selector-item>
        <div class="header__name">
          {{ mainStore.poemName }}
        </div>
        <div class="header__author">
          {{ mainStore.poemAuthor }}
        </div>

      </div>

        <div class="poem-list">
          <transition-group name="anim-list">
            <div v-for="i in indexes" :key="i">
              {{ poem[i] }}
            </div>
          </transition-group>
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
      indexes: null,
    }
  },
  methods: {
    handleClick(indexes) {
      this.indexes = indexes
    }
  },

  created() {
    this.selectorLength = this.mainStore.poem.length
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

@media only screen and (max-width: 600px)
.container
  font-size: 20px

.poem-container
  flex-direction: column

.header
  flex-direction: column
  align-items: center


@media only screen and (max-width: 992px)
  .container
    font-size: 25px
  .header
    display: flex
    flex-direction: column

  .poem-list
    width: 400px

@media only screen and (min-width: 992px)
  .header
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: 5vw
    width: 70%

  .poem-list
    width: 500px

  .container
   font-size: 30px

@media all and (min-width: 2000px)
  .header
    display: flex
    flex-direction: row
    justify-content: space-between
    gap: 5vw
    width: 20%
  .container
    font-size: 40px
  .poem-list
      width: 700px

  .header
    width: 100%


@media all and (min-width: 4000px)
  .container
    font-size: 50px

  .poem-list
     width: 800px


.header
  margin: 5vh auto 2vh auto


  &__name
    font-weight: bold
    font-size: 1.8em
  &__author
    font-size: 0.8em


.container
  margin: 0 auto
  max-width: 120vh
  display: flex
  flex-direction: column
  align-items: center

.poem-list
  display: flex
  flex-direction: column



.anim-list-enter-active,
.anim-list-leave-active
  transition: all 0.5s ease

.anim-list-enter-from,
.anim-list-leave-to
  opacity: 0
  transform: translateX(30px)

</style>
