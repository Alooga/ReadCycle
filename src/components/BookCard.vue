<template>
  <div>
    <h3>Título:</h3>
    <p>Autor</p>
    <Button>Ver libro</Button>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: ["id"],
};
</script>
