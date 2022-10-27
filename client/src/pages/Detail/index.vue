<template>
  <DefaultLayout>
    <GridComponent />
  </DefaultLayout>
</template>

<script>
import GridComponent from '../../components/Containers/Grid/Detail.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Detail_Page',
  components: {
    DefaultLayout,
    GridComponent,
  },
};
</script>
