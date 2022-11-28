<template>
  <DefaultLayout>
    <CreateForm />
  </DefaultLayout>
</template>

<script>
import CreateForm from '../../components/Forms/Create/CreateForm.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Detail_Page',
  components: {
    DefaultLayout,
    CreateForm,
  },
};
</script>
