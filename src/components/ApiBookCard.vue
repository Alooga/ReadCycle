<template>
  <div>
    <div v-for="book in books" :key="book.id" class="p-3">
      <div
        :data-book-id="book.id"
        @click="selectCard(book)"
        @mouseover="hoverCard(book.id)"
        @mouseleave="unhoverCard"
        :class="[
          'text-left',
          'gap-8',
          'rounded-xl',
          'bg-white',
          'drop-shadow-xl',
          'p-10',
          'h-[250px]',
          'cursor-pointer',
          'transition',
          {
            'border': true,
            'border-gray-300': !isHovered(book.id) && !isSelected(book.id),
            'border-[#207581]': isHovered(book.id),
            'border-[#207581]': isSelected(book.id),
          }
        ]"
      >
        <div class="flex flex-col justify-around gap-5">
          <div class="flex space-y-3 gap-3">
            <img
              class="max-w-[120px] h-auto object-contain"
              :src="book.volumeInfo.imageLinks?.thumbnail"
              alt=""
            />
            <div class="flex flex-col gap-3">
              <h3 class="font-serif text-[1.2rem] font-bold">{{ book.volumeInfo.title }}</h3>
              <div v-for="author in book.volumeInfo.authors" :key="author">
                <p class="text-[0.8rem] leading-[1rem]">{{ author }}</p>
              </div>
              <p class="text-[0.8rem]">{{ book.volumeInfo.publishedDate }}</p>
            </div>
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
  name: 'ApiBookCard',
  data() {
    return {
      hoveredBookId: null,
      selectedBookId: null,
    }
  },
  computed: {
    ...mapState(useApiStore, ['books']),
  },
  methods: {
    hoverCard(bookId) {
      this.hoveredBookId = bookId;
    },
    unhoverCard() {
      this.hoveredBookId = null;
    },
    selectCard(book) {
      this.selectedBookId = this.selectedBookId === book.id ? null : book.id;
      this.saveBook(book);  // Llama a saveBook para mantener la lógica existente
    },
    saveBook(book) {
      this.$emit('bookselected', book)
    },
    isHovered(bookId) {
      return this.hoveredBookId === bookId;
    },
    isSelected(bookId) {
      return this.selectedBookId === bookId;
    },
  },
}
</script>

<style scoped>
.border-gray-300 {
  border-color: #d1d5db;
}
.border-gray-500 {
  border-color: #6b7280;
}
.border-black {
  border-color: #000000;
}
</style>
