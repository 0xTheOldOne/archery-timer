<template>
  <div class="timer">
    {{ formatTime(timer) }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
const prepare = require("@/assets/sounds/prepare.mp3");
const bip = require("@/assets/sounds/bip.mp3");

@Options({
  name: "Timer",
  props: {
    duration: Number,
  },
  data() {
    return {
      timer: 0,
      intervalId: null,
      prepareSound: null,
      bipSound: null,
    };
  },
  created() {
    this.prepareSound = new Audio(prepare);
    this.bipSound = new Audio(bip);
  },
  watch: {
    duration(newValue) {
      this.startTimer();
    },
  },
  methods: {
    startTimer() {
      this.startPreparationTimer();
    },
    startPreparationTimer() {
      clearInterval(this.intervalId);
      this.timer = 10;

      this.playSound(this.prepareSound);
      this.intervalId = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          clearInterval(this.intervalId);
          this.startShootingTimer();
        }
      }, 1000);
    },
    startShootingTimer() {
      clearInterval(this.intervalId);
      this.timer = this.duration;

      this.playSound(this.bipSound);
      this.intervalId = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          clearInterval(this.intervalId);
          this.playSound(this.prepareSound);
        }
      }, 1000);
    },
  },
})
export default class Timer extends Vue {
  formatTime(timer: number) {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let remainingSeconds = timer % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(
      remainingSeconds
    )}`;
  }
  pad(value: number) {
    return value.toString().padStart(2, "0");
  }
  playSound(audio: HTMLAudioElement) {
    audio.play();
  }
  duration!: number;
  timer: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  font-family: "Roboto Mono", monospace;
}
</style>
