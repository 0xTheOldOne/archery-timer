<template>
  <div class="home">
    <Timer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Timer from "@/components/Timer.vue"; // @ is an alias to /src

@Options({
  name: "HomeView",
  components: {
    Timer,
  },
  data() {
    return {};
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="less" scoped></style>
