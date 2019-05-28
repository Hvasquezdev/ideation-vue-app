<template>
  <div class="container is-fluid">
    <div class="idea-title__container">
      <h1 class="idea-title">
        How can you launch an ideation protocol in the fastest manner possible so that it can be tested with 100 people before end of June 2019?
      </h1>
    </div>
    <div class="idea-input-form__container">
      <idea-form></idea-form>
    </div>
    <div class="idea-list__container">
      <ul>
        <li>
          Idea abcdefghijklmnopqrstuv
        </li>
        <li>
          Idea abcdefghijklmnopqrstuv
        </li>
        <li>
          Idea abcdefghijklmnopqrstuv
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IdeaForm from '@/components/IdeaForm.vue';

export default {
  name: 'home-page',
  components: {
    IdeaForm
  },
}
</script>

<style lang="scss">
.container {
  max-width: 1071px !important;
  margin: auto !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 12%;

  .idea-title {
    font-family: 'Libre Baskerville', serif;
    font-size: 25px;
    font-weight: bold;
    color: #404040;
    max-width: 701px;
    padding-left: 75px;
    margin-bottom: 60px;
  }

  .idea-list__container {
    ul {
      padding-left: 100px;
      margin-top: 60px;

      li {
        font-family: 'Montserrat', sans-serif !important;
        color: rgba(64, 64, 64, .33);
        font-size: 20px;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 11px;
          height: 11px;
          background-color: #fff;
          border-radius: 50%;
          border: 1px solid #FF7C7C;
          left: -20px;
          top: 10px;
        }

        &:not(:last-child) {
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
