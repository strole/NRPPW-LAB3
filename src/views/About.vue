<template>
  <div class="about">
    <h1>Created by FER student</h1>
    <p>You have decided this statement is {{ statementIsTrue }}</p>
    <label>
      <input type="checkbox" v-model="statementIsTrue" />
      Is this statement true?
    </label>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {
      statementIsTrue: true,
    };
  },
};
</script>
