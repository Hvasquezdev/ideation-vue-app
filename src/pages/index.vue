<template>
  <div class="container is-fluid">
    <div class="idea-items__container">

      <!-- Main title of the page -->
      <div class="idea-title__container">
        <h1 class="idea-title">
          How can you launch an ideation protocol in the fastest manner possible so that it can be tested with 100 people before end of June 2019?
        </h1>
      </div>

      <!-- Input to set a new idea -->
      <div class="idea-input-form__container">
        <idea-form></idea-form>
      </div>

      <!-- List of ideas -->
      <idea-list-container />

      <!-- Chips -->
      <chips-time-container />

      <!-- Rate your session and know the total of ideas -->
      <rating-card></rating-card>

      <!-- Pink background that grow with the timer -->
      <div class="timer-bg" v-bind:style="{ height: `${bgHeight}%` }"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IdeaForm from '@/components/IdeaForm.vue';
import IdeaListContainer from '@/components/IdeaListContainer.vue';
import ChipsTimeContainer from '@/components/ChipsTimeContainer.vue';
import RatingCard from '@/components/RatingCard.vue';

export default {
  name: 'home-page',
  components: {
    IdeaForm,
    IdeaListContainer,
    ChipsTimeContainer,
    RatingCard
  },
  data() {
    return {
      timer: 0,
      intervalContainer: null,
      bgHeight: 0
    }
  },
  watch: {
    'timer': function () {
      if (this.timer >= 240) {
        this.endCount();
        this.$store.commit('TOGGLE_TYPING_STATUS', false);
      }
    },
    'typingStatus': function (value, oldValue) {
      if (this.typingStatus) {
        this.startCount();
      } else if(!value && value !== oldValue) {
        this.$store.dispatch('SAVE_IDEAS_SESSION');
      }
    },
  },
  methods: {
    startCount() {
      this.intervalContainer = setInterval(() => {
        this.timer++;
        this.bgHeight += 0.41666666666666666666666666666667;
      }, 1000);
    },
    endCount() {
      clearInterval(this.intervalContainer);
      this.timer = 0;
    }
  },
  computed: {
    ...mapGetters({
      typingStatus: 'getTypingStatus'
    })
  },
  destroyed() {
    if(this.intervalContainer) {
      clearInterval(this.intervalContainer);
    }
    this.$store.commit('CLEAR_SESSION');
  },
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  width: 100%;
  position: relative;

  &.is-fluid {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 32px; 
    padding-right: 32px;
  }

  .idea-input-form__container {
    position: relative;
    z-index: 10;
  }

  .idea-items__container {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100%;
    width: 100%;
    max-width: 1071px;
    padding-top: 10%;
    padding-bottom: 5%;
  }

  .idea-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 25px;
    font-weight: bold;
    position: relative;
    color: #404040;
    max-width: 701px;
    padding-left: 75px;
    margin-bottom: 60px;
    z-index: 10;
  }

  .timer-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FF7C7C;
    z-index: 0;
    transition-duration: .3s;
    transition-timing-function: ease-out;
  }
}
</style>
