<template>
  <div class="home">
    <Header title="Number generator" />
    <Generator />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Generator from "../components/Generator.vue";

export default {
  name: "Home",
  beforeCreate() {
    alert("Dobrodosli u vue3 aplikaciju!");
  },
  components: {
    Header,
    Generator,
  },
};
</script>
