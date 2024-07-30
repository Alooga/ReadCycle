<template>
    <div class="flex h-[175px] w-full">
       <div class="flex self-center justify-between w-full">

            <img src="../images/ReadCycle.svg" alt="logo ReadCycle" class="ps-10"> <!-- logo -->
            <div class="flex gap-2 ps-10">
                <img src="../images/BookIcon.svg" alt="logotipo readcycle">
                <img src="../images/ReadCycle.svg" alt="logo ReadCycle"> <!-- logo -->
            </div>

            <div id="buscador_top" class="flex border border-3 border-[#2A9AAA] rounded-full w-[469px] h-[49px]"> <!-- buscador con imagen lupa que en click dirige/activa resultados -->
                <input type="text" class="w-5/6 bg-transparent px-5 outline-none"> <!-- incluir aqui @keyup.enter="" para que en la busqueda se vaya a la página de resultados de búsqueda con el router -->
                <img src="../images/magnifying-glass-solid.svg" alt="icono lupa" class="h-5 w-1/6 self-center ps-8"> <!-- aqui faltaria ponerle el @click="" para que en la busqueda se vaya a la página de resultados de búsqueda con el router -->
            </div> <!-- buscador con imagen lupa que en click dirige/activa resultados -->
            <ul class="flex w-1/4 justify-around pe-10 text-xl font-semibold gap-10"> <!-- Falta enlazar con @click="" para que acudan a cada página que corresponda -->
                <li class="self-center">Buscar libro</li> <!-- enlace a buscar libro -->
                <li class="self-center">Ofrecer libro</li> <!-- enlace a ofrecer libro -->
                <li class="self-center">Mapa</li> <!-- enlace a mapa -->  
            </ul>
        </div> 
    </div>
    
    
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
            }
        }
    }
</script>