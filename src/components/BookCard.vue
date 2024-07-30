<template>
  <div class="flex p-5">
    <div class="text-left flex gap-8 rounded-xl bg-white drop-shadow-xl p-10">
      <img
        class="max-w-[120px] h-auto object-contain"
        src="https://aulaintercultural.org/wp-content/uploads/2019/04/Elprincipito.jpg"
        alt=""
      />
      <div class="flex flex-col justify-around gap-3">
        <div class="space-y-3">
          <h3 class="font-serif text-[1.5rem] font-bold">El principito</h3>
          <p class="text-[0.8rem]">Antonie De Saint -Exupéry</p>
        </div>
        <button
          class="bg-[#207581] text-white border border-[#207581] py-2 px-4 rounded hover:bg-[#155a65]"
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
              alt="User icon"
              class="w-4 h-4"
            />
              
              <p>Gracia, Barcelona</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: ["id"],
};
</script>
