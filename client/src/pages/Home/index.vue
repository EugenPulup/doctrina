<template>
  <DefaultLayout>
    <WelcomeComponent />
  </DefaultLayout>
</template>

<script>
import WelcomeComponent from '../../components/Containers/Welcome/index.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Home_Page',
  components: {
    WelcomeComponent,
    DefaultLayout,
  },
};
</script>
