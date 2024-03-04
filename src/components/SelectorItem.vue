<template>
  <div class="wrapper">
    <div
      v-for="(item, i) in styleList"
      :class="item"
      :key="i"
      @click="handleSelectorClick(i)"
    ></div>
  </div>
</template>
<script lang="js">
export default {
  emits: ['emitSelectorClick'],
  props: {
    length: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      index: 0,
      defaultSelector: 'selector-button inactive',
      clickedSelector: 'selector-button active',
      styleList: Array(this.length).fill(null)
    }
  },

  beforeMount() {
    this.styleList = this.styleList.map((item) => {
      item = this.clickedSelector
      return item
    })
  },

  computed: {
    isLast() {
      return this.styleList.filter((item) => item === this.clickedSelector).length === 1
    },
    indexes() {
      let result = []
      for (let i = 0; i < this.length; i++) {
        if (this.styleList[i] === this.clickedSelector) {
          result.push(i)
        }
      }
      return result
    }
  },

  methods: {
    objectStyle(style) {
      return style === this.clickedSelector ? this.defaultSelector : this.clickedSelector
    },
    handleSelectorClick(index) {
      console.log(this.isLast)
      if (!(this.isLast && this.styleList[index] === this.clickedSelector)) {
        this.styleList = this.styleList.map((item, i) => {
          item = i === index ? this.objectStyle(item) : item
          return item
        })
        this.$emit('emitSelectorClick', this.indexes)
        console.log(this.indexes)
      }
    }
  }
}
</script>
<style scoped lang="sass">
.wrapper
  display: flex
  flex-direction: row
  gap: 1.5rem
  width: fit-content
  height: fit-content

.selector-button
  border: 2px solid black

  @media all and (max-width: 2000px)
    width: 30px
    height: 30px

  @media all and (min-width: 2000px)
    width: 40px
    height: 40px

  @media all and (min-width: 4000px)
    width: 60px
    height: 60px


  &:hover
    cursor: pointer




.active
  background-color: black

.inactive
  background-color: transparent
</style>
