<template>
  <div class="idea-form__container">
    <div class="field is-grouped">
      <base-input
        type="text"
        placeholder="Type your idea here..."
        label="Press ENTER after each idea to add it to the list"
        className="is-medium"
        controlClass="is-expanded"
        v-model.trim="form.idea"
        @keydown.enter="setNewIdea"
      >
      </base-input>

      <div class="pl-2 control idea-form__button-container">
        <base-button class="is-dark mdc-button--raised" @click="setNewIdea">
          Add
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseInput from '@/components/base-components/BaseInput.vue';
import BaseButton from '@/components/base-components/BaseButton.vue';

export default {
  name: 'idea-form-container',
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      form: {
        idea: null,
      },
    };
  },
  methods: {
    setNewIdea() {
      if (!this.form.idea) return;
      if (this.form.idea && !this.typingStatus) this.startTyping();
      this.$store.dispatch('SET_NEW_IDEA', this.form.idea);
      this.form.idea = null;
    },
    startTyping() {
      this.$store.commit('TOGGLE_TYPING_STATUS', true);
    }
  },
  computed: {
    ...mapGetters({
      typingStatus: 'getTypingStatus',
    }),
  },
}
</script>

<style lang="scss">
.idea-form {
  &__container {
    padding: 20px 60px 60px 60px;
    border-radius: 86px;
    box-shadow: 0px 3px 6px rgba(0,0,0,.16);
    background: #fff;
  }

  &__button-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: -10px;
  }

  .pl-2 {
    padding-left: 1.5rem;
  }
}
</style>
