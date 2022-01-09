<template>
  <div class="home">
    <Header title="Generated numbers history" />
    <Number-component />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NumberComponent from "../components/NumberComponent.vue";

export default {
  name: "Numbers",
  components: {
    Header,
    NumberComponent,
  },
};
</script>
