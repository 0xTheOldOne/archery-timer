<template>
  <div class="timer-container">
    <div class="settings">
      <div>
        <label for="duration">Duration :</label>
        <select v-model="duration">
          <option value="-1">Select a duration</option>
          <option value="30">30 seconds</option>
          <option value="60">60 seconds</option>
          <option value="90">1 minute and 30 seconds</option>
          <option value="120">2 minutes</option>
          <option value="180">3 minutes</option>
          <option value="240">4 minutes</option>
        </select>
      </div>
    </div>
    <div class="timer">
      {{ formatTime(timer) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
const prepare = require("@/assets/sounds/prepare.mp3");
const bip = require("@/assets/sounds/bip.mp3");

@Options({
  name: "Timer",
  data() {
    return {
      duration: -1,
      timer: 0,
      intervalId: null,
      prepareSound: null,
      bipSound: null,
    };
  },
  created() {
    clearInterval(this.intervalId);
    this.prepareSound = new Audio(prepare);
    this.bipSound = new Audio(bip);
  },
  mounted() {
    clearInterval(this.intervalId);
  },
  unmounted() {
    clearInterval(this.intervalId);
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
.timer-container {
  display: grid;

  .settings {
    padding: 0 1rem;
    justify-self: flex-start;

    select {
      margin-left: 1rem;
    }
  }

  .timer {
    font-family: "Roboto Mono", monospace;
    align-self: center;
    justify-self: center;
  }
}
</style>
