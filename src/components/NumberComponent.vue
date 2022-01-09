<template>
  <div>
    <p
      v-for="(number, index) in history"
      :key="index"
      :class="activeIndexes(parseInt(value)).includes(index)"
    >
      {{ number }}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "NumberComponent",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>
