<template>
  <div>
    <h2 class="bg-slate-500 bg-opacity-30">{{ title }}</h2>
    <div
      class="card group basis-1/2 flex flex-row bg-base-100 shadow-xl w-full h-full"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
