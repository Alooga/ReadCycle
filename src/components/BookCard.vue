<template>

    <div class="flex flex-col text-left md:flex-row md:gap-8 bg-white drop-shadow-xl rounded-xl p-5">
      <img
        class="max-w-[120px] h-auto object-contain"
        :src="book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/120x180'"
        alt=""
      />
      <div class="flex flex-col justify-around gap-3">
        <div class="space-y-3">
          <h3 class="font-serif text-[1.2rem] font-bold">{{ book.volumeInfo.title }}</h3>
          <p class="text-[0.8rem]">{{ book.volumeInfo.authors?.join(', ') || 'Desconocido' }}</p>
        </div>
        <button
          class="bg-[#207581] text-white border border-[#207581] py-2 px-4 rounded hover:bg-[#155a65] w-1/2"
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
            <p>Adriana Sánchez</p>
          </div>
          <div>
            <div class="flex items-center gap-1">
              <img
                src="../assets/MapPin.svg"
                alt="Location icon"
                class="w-4 h-4"
              />
              <p>Gracia, Barcelona</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { useApiStore } from '../store/apiBooksStore'; 

export default {
  name: "BookCard",
  props: {
    bookIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    book() {
      const store = useApiStore();
      return store.books[this.bookIndex];
    }
  }
};
</script>
