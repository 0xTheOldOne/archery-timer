<template>
  <div class="home">
    <div>
      <label for="duration">Durée :</label>
      <select v-model="duration">
        <option value="-1">Selectionnez une durée</option>
        <option value="30">30 secondes</option>
        <option value="60">60 secondes</option>
        <option value="120">120 secondes</option>
        <option value="240">240 secondes</option>
      </select>
    </div>
    <Timer :duration="duration" />
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
    return {
      duration: -1,
    };
  },
})
export default class HomeView extends Vue {
  duration!: number;
}
</script>

<style lang="less" scoped></style>
