<template>
  <DefaultLayout>
    <WelcomeComponent />
    <GridComponent />
    <!-- <TableComponent /> -->
    <StatsComponent />
  </DefaultLayout>
</template>

<script>
import WelcomeComponent from '../../components/Containers/Welcome/index.vue';
import GridComponent from '../../components/Containers/Grid/index.vue';
// import TableComponent from '../../components/Containers/Table/index.vue';
import StatsComponent from '../../components/Containers/Statistic/index.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Home_Page',
  components: {
    WelcomeComponent,
    StatsComponent,
    DefaultLayout,
    GridComponent,
    // TableComponent,
  },
};
</script>
