<template>
  <div class="idea-list__container">
    <ul v-if="ideas">
      <idea-list-item v-for="(idea, index) in ideas.slice().reverse()" :key="index">
        {{ idea }}
      </idea-list-item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IdeaListItem from '@/components/IdeaListItem.vue';

export default {
  name: 'idea-list-container',
  components: {
    IdeaListItem,
  },
  computed: {
    ...mapGetters({
      ideas: 'getIdeas',
    }),
  },
}
</script>

<style lang="scss" scoped>
  .idea-list__container {
    position: relative;
    z-index: 10;

    ul {
      padding-left: 100px;
      margin-top: 60px;
      overflow-y: scroll;
      overflow-x: hidden;
      max-height: 350px;

      /* size of the scroll */
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      /* scroll style bar */
      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, .51);
        border: 1px solid #FF7C7C;
        border-radius: 4px;
      }

      /* scroll track styles */
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 4px;
      }
    }
  }
</style>
