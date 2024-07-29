<template>
    <div class="flex justify-between self-center w-full h-[656px] bg-[#E3F6F8] bg-no-repeat">
        <img src="../images/BooksLeft.svg" alt="people reading left side">
        <div class="flex flex-col font-serif font-semibold place-content-center gap-5">            
            <h1 class="self-center text-7xl"><span class="text-[#1B626D]">Lee,</span> comparte, <span class="text-[#1B626D]">recicla</span></h1>
            <p class="font-sans text-xl">Dale una nueva vida a tus libros</p>
            <div class="flex justify-center gap-10 text-lg font-sans py-5">
                <button class="bg-[#207581] h-12 px-5 text-white rounded-full text-lg">Encuentra mi libro</button>
                <button class="h-12 border border-[#207581] bg-white px-5 text-[#207581] rounded-full text-lg">Ofrecer un libro</button>
            </div>
        </div>
        <img src="../images/BooksRight.svg" alt="people reading right side">
    </div>
</template>

<script>
    export default {
        name: "Slider",
        data () {
            return
        }
    }
</script>