<template>
  <div class="idea-list__container">
    <ul v-if="ideas">
      <idea-list-item v-for="(idea, index) in ideas" :key="index">
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
      max-height: 350px;
      overflow-y: scroll;

      /* size of the scroll */
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      /* scroll style bar */
      &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb:active {
        background-color: #999999;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      }

      /* scroll track styles */
      &::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-track:hover, 
      &::-webkit-scrollbar-track:active {
        background: #d4d4d4;
      }
    }
  }
</style>
