<template>

    <nav class="relative px-4 py-5 flex justify-between items-center bg-white">
      <RouterLink to="/">
          <img
            class="w-[60%] md:ml-20"
            src="../images/logo-read-cycle.svg"
            alt="logotipo readcycle"
          />
        </RouterLink>
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-blue-[#207581] p-3">
          <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden absolute gap-8 top-1/2 right-[0] transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
        <!-- Navigation items -->
        <li> <RouterLink to="/search-book">Buscar Libro</RouterLink></li>
        <li> <RouterLink to="/offer-book">Ofrecer Libro</RouterLink></li>
      </ul>
  
    </nav>
    
    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">

          </a>
          <button class="navbar-close">
            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <li> <RouterLink  class="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#E3F6F8] hover:text-[#207581] rounded"to="/search-book">Buscar Libro</RouterLink></li>
            
            </li>
            <li class="mb-1">
              <li> <RouterLink  class="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#E3F6F8] hover:text-[#207581] rounded" to="/offer-book">Ofrecer Libro</RouterLink></li>
            </li>
          
          </ul>
        </div>
        <div class="mt-auto">
         
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Made with ❤️</span>
          </p>
        </div>
      </nav>
    </div>
 
</template>

<script>
export default {
  name: "Header",
  mounted() {
    // Burger menu open and close functionality
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (burger.length && menu.length) {
      burger.forEach(b => {
        b.addEventListener('click', () => {
          menu.forEach(m => m.classList.toggle('hidden'));
        });
      });
    }

    if (close.length) {
      close.forEach(c => {
        c.addEventListener('click', () => {
          menu.forEach(m => m.classList.toggle('hidden'));
        });
      });
    }

    if (backdrop.length) {
      backdrop.forEach(b => {
        b.addEventListener('click', () => {
          menu.forEach(m => m.classList.toggle('hidden'));
        });
      });
    }
  }
}
</script>

<style scoped>
/* Add any scoped CSS styles here */
</style>
