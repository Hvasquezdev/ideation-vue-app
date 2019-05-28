export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: [String, Number],
    className: {
      type: String,
      default: '',
    },
    controlClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};