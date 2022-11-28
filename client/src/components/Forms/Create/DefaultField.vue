<template>
  <div class="form-control">
    <label class="input-group input-group-vertical">
      <span>{{ label }}</span>
      <slot name="field"> </slot>
    </label>
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: 'DefaultField',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
