<template>
  <div class="settings">
    <div v-if="timer <= 0 && currentPhase != endPhase">
      <label for="duration">{{ $t("duration.label") }} :</label>
      <select v-model="duration">
        <option value="20">{{ $t("duration.20") }}</option>
        <option value="30">{{ $t("duration.30") }}</option>
        <option value="60">{{ $t("duration.60") }}</option>
        <option value="90">{{ $t("duration.90") }}</option>
        <option value="120">{{ $t("duration.120") }}</option>
        <option value="180">{{ $t("duration.180") }}</option>
        <option value="240">{{ $t("duration.240") }}</option>
      </select>
    </div>
    <div
      class="phase"
      v-else-if="
        currentPhase == preparationPhase ||
        currentPhase == hurryPhase ||
        currentPhase != endPhase
      "
    >
      {{ currentPhase }}
    </div>
  </div>

  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__bounceInLeft"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <div
      class="timer"
      :class="timerClass"
      v-if="currentPhase == preparationPhase || currentPhase == ''"
    >
      {{ formatTime(timer) }}
      <span class="alert"
        >{{ $t("duration.alert") }} : {{ formatTime(hurryUp) }}</span
      >
    </div>
    <div
      class="timer"
      :class="timerClass"
      v-else-if="currentPhase == shootingPhase || currentPhase == hurryPhase"
    >
      {{ formatTime(timer) }}
    </div>
    <div class="timer end" v-else-if="currentPhase == endPhase">
      {{ endPhase }}
    </div>
  </Transition>

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
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";
import { getSupportedLocales } from "../locales/helper";
import { getBrowserLocale } from "../locales/helper";

const bip1 = require("@/assets/sounds/bip-1.mp3");
const bip2 = require("@/assets/sounds/bip-2.mp3");
const bip3 = require("@/assets/sounds/bip-3.mp3");

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      timer: 0 as number,
      duration: 120 as number,
      preparation: 10 as number,
      currentPhase: "" as string,
      intervalId: undefined as number | undefined,
      lastPlayedSound: undefined as HTMLAudioElement | undefined,
      bip1Sound: undefined as HTMLAudioElement | undefined,
      bip2Sound: undefined as HTMLAudioElement | undefined,
      bip3Sound: undefined as HTMLAudioElement | undefined,
      locales: getSupportedLocales(),
      browserLocale: getBrowserLocale({ countryCodeOnly: true }),
    };
  },
  setup() {
    const { t } = useI18n();

    const preparationPhase = computed(() => {
      return t("phase.prepare");
    });

    const shootingPhase = computed(() => {
      return t("phase.shoot");
    });

    const hurryPhase = computed(() => {
      return t("phase.hurry");
    });

    const endPhase = computed(() => {
      return t("phase.end");
    });

    return {
      preparationPhase,
      shootingPhase,
      hurryPhase,
      endPhase,
    };
  },
  computed: {
    hurryUp() {
      var value = 0;

      if (this.duration > 30) {
        value = 15;
      } else if (this.duration > 20) {
        value = 10;
      } else {
        value = 5;
      }

      return value;
    },
    timerClass() {
      if (
        (this.currentPhase == this.shootingPhase ||
          this.currentPhase == this.hurryPhase) &&
        this.timer <= this.hurryUp
      ) {
        return "red";
      } else if (this.currentPhase == this.preparationPhase) {
        return "yellow";
      }

      return "";
    },
  },
  created() {
    this.stopTimer();
    this.bip1Sound = new Audio(bip1);
    this.bip2Sound = new Audio(bip2);
    this.bip3Sound = new Audio(bip3);
  },
  mounted() {
    this.stopTimer();

    if (this.browserLocale) {
      this.$i18n.locale = this.browserLocale;
    }
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

      this.playSound(this.bip3Sound);
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

        this.playSound(this.bip1Sound);
        this.intervalId = setInterval(() => {
          if (this.timer) {
            this.timer--;

            // Hurry up ?
            if (this.timer === this.hurryUp) {
              this.currentPhase = this.hurryPhase;
              this.playSound(this.bip2Sound);
            }

            // End of shooting
            if (this.timer === 0) {
              this.stopTimer();
              this.playSound(this.bip3Sound);
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
    max-width: 75%;

    label {
      margin-right: 1rem;
    }

    select {
      width: 100%;
    }

    &.phase {
      min-width: 100%;
      font-size: 3rem;
      text-align: center;
    }
  }
}

.commands {
  bottom: 0;

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
  position: absolute;

  &:not(.end) {
    font-family: "Roboto Mono", monospace;
  }

  .alert {
    position: absolute;
    right: 0;
    bottom: -2rem;
    line-height: 1rem;
    font-size: 1rem;
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
    justify-content: space-between;

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
    justify-content: center;

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

@media screen and (min-width: 800px) {
  .settings {
    top: 10rem;

    > div {
      width: 100%;
    }
  }
  .commands {
    max-width: 50%;
    margin: 0 auto;
    bottom: 10rem;
  }
}
</style>
