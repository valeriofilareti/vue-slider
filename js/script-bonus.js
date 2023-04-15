const {createApp} = Vue;

createApp({
  data(){
    return {
      immagini: [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp'
      ],
      counter: 0,
    }
  },
  methods: {
    next(){
      if (this.counter < this.immagini.length -1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
    },
    prev(){
      if (this.counter === 0) {
        this.counter = this.immagini.length -1;
      } else {
        this.counter--;
      }
    },
    thumbClick(index){
      this.counter = parseInt(index) 
    }
  }

}).mount('#app')