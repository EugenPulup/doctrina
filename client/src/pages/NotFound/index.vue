<template>
  <DefaultLayout>
    <NotFound />
  </DefaultLayout>
</template>

<script>
import NotFound from '../../components/Base/NotFound/index.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: '404_Page',
  components: {
    NotFound,
    DefaultLayout,
  },
};
</script>
