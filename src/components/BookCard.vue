<template>
  <div>
    <div
      v-if="book"
      class="flex flex-col gap-5 text-left xl:flex-row md:gap-5 bg-white drop-shadow-xl rounded-xl p-8 w-full max-w-md overflow-hidden"
      role="article"
      aria-labelledby="book-info"
    >
      <img
        class="max-w-[120px] h-auto object-contain"
        :src="book.image"
        alt="Book Cover"
      />
      <div class="flex flex-col justify-around gap-3 w-full">
        <div class="space-y-3">
          <h3 class="font-serif text-[1.2rem] font-bold">{{ book.title }}</h3>
          <div v-for="author in book.author">
            <p class="text-[0.8rem]">{{ author }}</p>
          </div>
        </div>
        <RouterLink :to="`/book/${book.id}`"
        class= "text-primary border border-[#207581] py-2 px-4 rounded-full hover:bg-[#207581] hover:text-[white] w-[150px]"
          aria-label="View book details">Ver Libro</RouterLink>
        
        <div class="flex flex-col items-left justify-between md:gap-1 text-[0.8rem]">
          <div class="flex items-center gap-2">
            <img
              src="../assets/UserCircle.svg"
              alt="User icon"
              class="w-4 h-4"
            />
            <p>{{ book.userName }}</p>
          </div>
          <div>
            <div class="flex items-center gap-1">
              <img
                src="../assets/MapPin.svg"
                alt="Location icon"
                class="w-4 h-4"
              />
              <p>{{ book.location }}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { RouterLink } from "vue-router";

export default {
  props: {
    book: Object,
    
    
  },
};
</script>
