<template>
  <div class="flex p-5" >
    <div v-for="book in books" key="book.id" class="p-3" >
    <div class="text-left flex gap-8 rounded-xl bg-white drop-shadow-xl p-10">
      <div class="flex flex-col justify-around gap-3">
        <div class="space-y-3" v-on:click="saveBook(book)">
          <img
        class="max-w-[120px] h-auto object-contain"
        :src="book.volumeInfo.imageLinks.smallThumbnail"
        alt=""
      />
          <h3 class="font-serif text-[1rem] font-bold">{{ book.volumeInfo.title }}</h3>
         <div v-for="author in book.volumeInfo.authors">
          <p class="text-[0.8rem]">{{ author }}</p>
        </div>
          <p class="text-[0.8rem]">{{ book.volumeInfo.publishedDate }}</p>
        </div>
      </div>
        
          </div>
        </div>
      </div>
</template>

<script>
import { mapState } from 'pinia'
import { useApiStore } from '../store/apiBooksStore.js'


export default {
  name: "ApiBookCard",
  components: ['book'],
  data(){
    return {

    }
  },
  computed: {
    ...mapState(useApiStore, ['books']),
  },
  methods: {
    saveBook(book){
 
      this.$emit('bookselected', book)
      
    
    }
  },
};
</script>
