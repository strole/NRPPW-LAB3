<template>
  <PageNotFound />
</template>

<script>
import { defineAsyncComponent } from "vue";
const PageNotFound = defineAsyncComponent(() =>
  import("../components/PageNotFound.vue")
);

export default {
  name: "About",
  components: { PageNotFound },
};
</script>
