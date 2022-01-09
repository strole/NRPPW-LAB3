<template>
  <div>
    <h3>Generated number:</h3>
    <h1 class="counter">{{ randomNumber }}</h1>
  </div>
  <Button @btn-click="addRandom(randomNumber)" :text="'GENERATE NUMBER'" />
  <br />
  <br />
</template>

<script>
import Button from "./Button.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Generator",
  props: {
    text: Number,
  },
  components: {
    Button,
  },
  methods: {
    ...mapActions(["getRandomNumber"]),
    addRandom() {
      this.$store.dispatch("getRandomNumber");
    },
    beforeCreate() {
      this.$store.dispatch("getRandomNumber");
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["randomNumber"]),
  },
};
</script>
