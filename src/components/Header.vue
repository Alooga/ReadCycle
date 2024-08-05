<template>
    <header class="flex justify-between gap-5 md:flex-row items-center p-4 md:p-8 bg-white shadow-md">
      <!-- Contenedor del Logo y Menú -->
       
      <div class="flex items-center justify-between w-full md:w-auto">
        <!-- Logo -->
        <RouterLink to="/">
          <img
            class="w-[150px] md:w-[200px]"
            src="../images/logo-read-cycle.svg"
            alt="logotipo readcycle"
          />
        </RouterLink>
  
        <!-- Botón del menú hamburguesa para dispositivos móviles -->
   <!--      <button @click="toggleMenu" class="md:hidden flex items-center">
          <div class="tham tham-e-squeeze tham-w-6">
            <div class="tham-box">
              <div class="tham-inner"/>
            </div>
          </div>
        </button> -->
      </div>
  
      <!-- Buscador visible en pantallas grandes -->
      <!-- <div
        id="buscador_top"
        class="hidden md:flex border border-3 border-[#2A9AAA] rounded-full w-[300px] md:w-[500px] p-3"
      >
        <input
          type="text"
          class="w-5/6 bg-transparent px-5 outline-none"
          placeholder="Escribe título, autor o género"
        />
        <img
          src="../images/magnifying-glass-solid.svg"
          alt="icono lupa"
          class="h-5 w-1/6 self-center ps-8"
        />
      </div> -->
  
      <!-- Menú de navegación visible en pantallas grandes -->
      <ul class="flex justify-end text-[1rem] gap-10  text-right">
        <li>
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li>
          <RouterLink to="/offer-book">Ofrecer Libro</RouterLink>
        </li>
      </ul>
  
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>