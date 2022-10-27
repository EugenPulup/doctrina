<template>
  <DefaultLayout>
    <GridComponent />
    <StatsComponent />
  </DefaultLayout>
</template>

<script>
import GridComponent from '../../components/Containers/Grid/index.vue';
// import TableComponent from '../../components/Containers/Table/index.vue';
import StatsComponent from '../../components/Containers/Statistic/index.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Hub_Page',
  components: {
    StatsComponent,
    DefaultLayout,
    GridComponent,
    // TableComponent,
  },
};
</script>
