import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      poemName: 'Invictus',
      poemAuthor: 'William Ernest Henley',
      poem: [
        'Out of the night that covers me,\n' +
          '      Black as the pit from pole to pole,\n' +
          'I thank whatever gods may be\n' +
          '      For my unconquerable soul.\n',

        'In the fell clutch of circumstance\n' +
          '      I have not winced nor cried aloud.\n' +
          'Under the bludgeonings of chance\n' +
          '      My head is bloody, but unbowed.\n',
        'Beyond this place of wrath and tears\n' +
          '      Looms but the Horror of the shade,\n' +
          'And yet the menace of the years\n' +
          '      Finds and shall find me unafraid.\n',
        'It matters not how strait the gate,\n' +
          '      How charged with punishments the scroll,\n' +
          'I am the master of my fate,\n' +
          '      I am the captain of my soul.'
      ]
    }
  }
})
