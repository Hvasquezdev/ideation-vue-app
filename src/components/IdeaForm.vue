<template>
  <div class="idea-form__container">
    <div class="field is-grouped">
      <base-input
        type="text"
        placeholder="Type your idea here..."
        label="Press ENTER after each idea to add it to the list"
        className="is-medium"
        controlClass="is-expanded"
        v-model="form.idea"
      >
      </base-input>

      <div class="control idea-form__button-container">
        <base-button class="is-dark mdc-button--raised">
          Add
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
.idea-form {
  &__container {
    padding: 20px 60px 60px 60px;
    border-radius: 86px;
    box-shadow: 0px 3px 6px rgba(0,0,0,.16);
  }

  &__button-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: -10px;
  }
}
</style>
