<template>
  <div class="settings">
    <div v-if="timer <= 0 && currentPhase != endPhase">
      <label for="duration">Shooting duration :</label>
      <select v-model="duration">
        <option value="30">30 seconds</option>
        <option value="60">60 seconds</option>
        <option value="90">1 minute and 30 seconds</option>
        <option value="120">2 minutes</option>
        <option value="180">3 minutes</option>
        <option value="240">4 minutes</option>
      </select>
    </div>
    <div class="phase" v-else-if="currentPhase != endPhase">
      {{ currentPhase }}
    </div>
  </div>

  <div class="timer" :class="timerClass" v-if="currentPhase != endPhase">
    {{ formatTime(timer) }}
  </div>
  <div class="timer end" v-else>{{ endPhase }}</div>

  <div class="commands" v-if="currentPhase != endPhase">
    <div>
      <span
        class="command material-symbols-outlined"
        @click="startTimer"
        v-if="timer <= 0"
      >
        play_circle
      </span>
    </div>
    <div>
      <span
        class="command material-symbols-outlined red"
        @click="stopTimer"
        v-if="timer > 0"
      >
        stop_circle
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const prepare = require("@/assets/sounds/prepare.mp3");
const bip = require("@/assets/sounds/bip.mp3");

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      timer: 0 as number,
      duration: 120 as number,
      preparation: 10 as number,
      currentPhase: "" as string,
      preparationPhase: "💪 Ready ? Prepare...",
      shootingPhase: "🏹 Shoot !",
      endPhase: "👏 It's over !",
      intervalId: undefined as number | undefined,
      lastPlayedSound: undefined as HTMLAudioElement | undefined,
      prepareSound: undefined as HTMLAudioElement | undefined,
      bipSound: undefined as HTMLAudioElement | undefined,
    };
  },
  computed: {
    timerClass() {
      if (this.timer <= 10) {
        if (this.currentPhase == this.preparationPhase) {
          return "yellow";
        } else if (this.currentPhase == this.shootingPhase) {
          return "red";
        }
      }

      return "";
    },
  },
  created() {
    this.stopTimer();
    this.prepareSound = new Audio(prepare);
    this.bipSound = new Audio(bip);
  },
  mounted() {
    this.stopTimer();
  },
  unmounted() {
    this.stopTimer();
  },
  methods: {
    pad(value: number) {
      return value.toString().padStart(2, "0");
    },
    formatTime(timer: number) {
      let hours = Math.floor(timer / 3600);
      let minutes = Math.floor((timer % 3600) / 60);
      let remainingSeconds = timer % 60;

      return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
    },
    playSound(audio: HTMLAudioElement | undefined) {
      if (audio) {
        this.lastPlayedSound = audio;
        audio.play();
      }
    },
    startTimer() {
      if (this.preparation && this.duration) {
        this.stopTimer();
        this.startPreparationTimer();
      }
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.timer = 0;
      this.currentPhase = "";

      if (this.lastPlayedSound) {
        this.lastPlayedSound.pause();
        this.lastPlayedSound.load();
        this.lastPlayedSound = undefined;
      }
    },
    startPreparationTimer() {
      this.timer = 10;
      this.currentPhase = this.preparationPhase;

      this.playSound(this.prepareSound);
      this.intervalId = setInterval(() => {
        if (this.timer) {
          this.timer--;
          if (this.timer === 0) {
            this.stopTimer();
            this.startShootingTimer();
          }
        }
      }, 1000);
    },
    startShootingTimer() {
      if (this.duration) {
        this.timer = this.duration;
        this.currentPhase = this.shootingPhase;

        this.playSound(this.bipSound);
        this.intervalId = setInterval(() => {
          if (this.timer) {
            this.timer--;
            if (this.timer === 0) {
              this.stopTimer();
              this.playSound(this.prepareSound);
              this.startEndTimer();
            }
          }
        }, 1000);
      }
    },
    startEndTimer() {
      this.timer = 5;
      this.currentPhase = this.endPhase;

      this.intervalId = setInterval(() => {
        if (this.timer) {
          this.timer--;
          if (this.timer === 0) {
            this.stopTimer();
            this.currentPhase = "";
          }
        }
      }, 1000);
    },
  },
});
</script>

<style lang="less" scoped>
.settings,
.commands {
  position: fixed;

  left: 0;
  right: 0;
  display: flex;
  align-items: center;
}

.settings {
  top: 0;
  justify-content: space-evenly;
  font-size: 1.2rem;

  > div {
    width: 50%;

    label {
      margin-right: 1rem;
    }

    select {
      width: 100%;
    }

    &.phase {
      width: 100%;
      font-size: 3rem;
      text-align: center;
    }
  }
}

.commands {
  bottom: 0;
  justify-content: space-between;

  .command {
    @size: 3rem;
    font-size: @size;
    line-height: @size;
    margin: 0 1rem;
  }
}

.timer {
  align-self: center;
  justify-self: center;
  font-weight: bold;

  &:not(.end) {
    font-family: "Roboto Mono", monospace;
  }
}

* {
  &.red {
    color: #f44336;
  }

  &.yellow {
    color: #fdd835;
  }
}

@media (orientation: landscape) {
  .settings {
    padding: 0.75rem;
  }

  .commands {
    padding: 0rem;
  }

  .commands {
    .command {
      @size: 5rem;
      font-size: @size;
      line-height: @size;
    }
  }

  .timer {
    font-size: 5rem;

    &:not(.end) {
      font-size: 7rem;
    }
  }
}

@media (orientation: portrait) {
  .settings,
  .commands {
    padding: 1rem;
  }

  .settings {
    > div {
      width: 100%;
    }
  }

  .commands {
    .command {
      @size: 5rem;
      font-size: @size;
      line-height: @size;
    }
  }

  .timer {
    font-size: 3rem;

    &:not(.end) {
      font-size: 6rem;
    }
  }
}
</style>
