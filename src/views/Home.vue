<template>
  <Slider />

  <h3 class="font-serif text-[2rem] font-bold mt-14 mb-10">Últimos libros</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
    <BookCard
      v-for="userBook in usersBooks"
      :key="userBook.isbn"
      :book="userBook"
    />
  </div>

  <section class="grid grid-cols-1 text-left md:grid-cols-2  px-4 md:px-16 py-16 md:py-36">
  <div>
    <div>
      <p class="font-semibold text-lg">RECICLA TUS LIBROS</p>
      <h3 class="font-serif text-3xl md:text-4xl font-semibold">
        <span class="text-[#207581]">Comparte</span> tus libros <br class="hidden md:block">en 3 pasos
      </h3>
    </div>
    <div class="space-y-8 mt-8 pr-0 md:pr-20">
      <div class="flex gap-4 items-start">
        <img src="../images/book-icon.svg" alt="Icono de libro" class="w-12 h-12" />
        <div>
          <h6 class="font-bold text-lg">Publica tu libro</h6>
          <p>
            Llena un formulario con los detalles del libro que quieres
            intercambiar.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <img src="../images/chat-icon.svg" alt="Icono de chat" class="w-12 h-12" />
        <div>
          <h6 class="font-bold text-lg">Contacta a otros Usuarios</h6>
          <p>
            Usa el chat interno para acordar el intercambio con otros
            usuarios.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <img src="../images/share-icon.svg" alt="Icono de compartir" class="w-12 h-12" />
        <div>
          <h6 class="font-bold text-lg">Comparte y disfruta</h6>
          <p>
            Queda en un lugar conveniente para realizar el intercambio y
            disfruta de tu nueva lectura.
          </p>
        </div>
      </div>
    </div>
  </div>

  <img class="self-center mt-16 md:mt-0" src="../images/woman-flying-with-book.svg" alt="Mujer volando con un libro" />
</section>

</template>

<script>
import Slider from "../components/Slider.vue";
import BookCard from "../components/BookCard.vue";
import { useUsersBooksStore } from "../store/usersBooksStore";
import { onMounted, computed } from "vue";

export default {
  components: {
    BookCard,
    Slider,
  },
  setup() {
    const usersBooksStore = useUsersBooksStore();

    onMounted(() => {
      usersBooksStore.booksForCards();
    });

    const usersBooks = computed(() => usersBooksStore.usersBooks);

    return {
      usersBooks,
    };
  },
};
</script>