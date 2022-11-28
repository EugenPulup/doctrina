<template>
  <div
    class="flex flex-row justify-center mx-auto w-5/6 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 min-h-screen"
  >
    <Form
      class="flex flex-col gap-4 hero-content w-full"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <GeneralOptions></GeneralOptions>

      <DockerfileOptions @language="getLanguage"></DockerfileOptions>

      <PhpOptions
        v-if="generateFormStore.$state.language == 'PHP'"
      ></PhpOptions>

      <NodeOptions
        v-if="generateFormStore.$state.language == 'Node'"
      ></NodeOptions>

      <button class="btn btn-wide btn-accent btn-disabled">Generate</button>
    </Form>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate';
import { inject } from 'vue';
import { useNotificationStore } from '../../../stores/notification';
import { useGenerateFormState } from '../../../stores/createFrom';
import { object, string, number } from 'yup';

import GeneralOptions from './Options/GeneralOptions';
import DockerfileOptions from './Options/DockerfileOptions';
import PhpOptions from './Options/PhpOptions';
import NodeOptions from './Options/NodeOptions';

const api = inject('api');
const notificationStore = useNotificationStore();
const generateFormStore = useGenerateFormState();

const schema = object({
  language: string().required(),
  basePort: number().required(),
  sourcePath: string().required(),
  workdir: string().required(),
});

async function onSubmit(values) {
  console.log(values);
  const { error, status } = await api.post({
    path: '/auth/login',
    data: values,
  });

  if (error || status !== 200) {
    notificationStore.addNotification({
      type: 'error',
      message: error.message || 'Something went wrong',
    });
  }

  notificationStore.addNotification({
    type: 'success',
    message: 'Login successful',
  });
}
</script>
