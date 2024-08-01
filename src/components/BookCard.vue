<template>
<div>
    <div v-if="book" class="flex flex-col text-left md:flex-row md:gap-8 bg-white drop-shadow-xl rounded-xl p-5">
      <img
        class="max-w-[120px] h-auto object-contain"
        :src="book.image" alt="Book Cover"
      />
      <div class="flex flex-col justify-around gap-3">
        <div class="space-y-3">
          <h3 class="font-serif text-[1.2rem] font-bold">{{ book.title }}</h3>
        <div v-for="author in book.author">
          <p class="text-[0.8rem]">{{ author }}</p>
        </div>
        </div>
        <button
          class="bg-[#207581] text-white border border-[#207581] py-2 px-4 rounded hover:bg-[#155a65] "
        >
          Ver libro
        </button>
        <div class="flexitems-left justify-between gap-5 text-[0.8rem]">
          <div class="flex items-center gap-2">
            <img
              src="../assets/UserCircle.svg"
              alt="User icon"
              class="w-4 h-4"
            />
            <p> {{ book.userName }}</p>
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
import { ref, onMounted, computed } from 'vue';


export default {
  props: {
    book: Object
  },  



};
</script>