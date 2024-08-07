<template>
  <div class="relative w-full h-auto md:h-[656px] bg-[#E3F6F8] overflow-hidden">
    <img
      src="../images/BooksLeft.svg"
      alt="people reading left side"
      class="absolute top-0 -left-10 md:left-0 w-1/3 md:w-1/4 h-auto"
    />
    <img
      src="../images/BooksRight.svg"
      alt="people reading right side"
      class="absolute top-0 -right-10 md:right-0 w-1/3 md:w-1/4 h-auto"
    />
    <div
      class="relative z-10 flex flex-col justify-center items-center text-center w-full h-full p-8 md:p-8"
    >
      <div class="flex flex-col p-8 font-serif w-[80%] gap-5 max-w-lg">
        <h1
          class="text-[2.4rem] leading-[3rem] font-bold md:text-5xl md:p-8 lg:text-6xl lg:p-5"
        >
          <span class="text-[#1B626D]">Lee,</span> comparte,
          <span class="text-[#1B626D]">recicla</span>
        </h1>
        <p class="font-sans font-regular sm:text-lg lg:text-xl">
          Dale una nueva vida a tus libros
        </p>
        <div
          class="flex md:flex-row justify-center items-center gap-2 md:gap-4 text-base md:text-lg font-sans py-5 w-full max-w-lg md:max-w-xl mx-auto"
        >
          <RouterLink
            class="bg-[#207581] py-3 px-5 text-white rounded-full text-base md:text-lg w-auto md:w-auto hover:bg-[#115D67]"
          to="/search-book"
          >
            Buscar libro
          </RouterLink>
          <RouterLink
            class="text-primary border-2 bg-white border-[#207581] py-3 px-5 rounded-full hover:bg-[#207581] hover:text-white text-base md:text-lg w-auto md:w-auto"
            to="/offer-book"
          >
            Ofrecer Libro
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return;
  },
};
</script>
