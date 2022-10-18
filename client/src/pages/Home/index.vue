<template>
  <DefaultLayout>
    <WelcomeComponent />
    <StatsComponent />
  </DefaultLayout>
</template>

<script>
import WelcomeComponent from '../../components/Containers/Welcome/index.vue';
import StatsComponent from '../../components/Containers/Statistic/index.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Home_Page',
  components: {
    WelcomeComponent,
    StatsComponent,
    DefaultLayout,
  },
};
</script>
