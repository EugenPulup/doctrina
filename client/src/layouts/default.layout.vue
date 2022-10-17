<template>
  <div class="container min-w-full min-h-full">
    <BaseHeader></BaseHeader>
    <div class="flex flex-col min-h-screen justify-center">
      <slot></slot>
    </div>

    <BaseFooter></BaseFooter>
  </div>
</template>
>

<script>
import BaseFooter from '../components/Base/Footer/index.vue';
import BaseHeader from '../components/Base/Header/index.vue';
export default {
  name: 'DefaultLayout',
  components: {
    BaseFooter,
    BaseHeader,
  },
};
</script>
