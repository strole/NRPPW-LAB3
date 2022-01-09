<template>
  <button @click="onClick()" class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  background: #4caf50;
  color: white;
  border: 2px solid;
  border-color: gray;
  padding: 15px 20px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: inherit;
  font-weight: 600;
}
</style>
