<template>
  <div data-theme="cyberpunk" class="container min-w-full min-h-full">
    <BaseHeader></BaseHeader>
    <div class="flex flex-col min-h-screen justify-center">
      <slot></slot>
    </div>

    <BaseFooter></BaseFooter>
    <NotificationComponent></NotificationComponent>
  </div>
</template>
>

<script>
import BaseFooter from '../components/Base/Footer/index.vue';
import BaseHeader from '../components/Base/Header/index.vue';
import NotificationComponent from '../components/Base/Notification/index.vue';
export default {
  name: 'DefaultLayout',
  components: {
    BaseFooter,
    BaseHeader,
    NotificationComponent,
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>
