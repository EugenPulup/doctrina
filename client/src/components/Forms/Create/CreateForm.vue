<template>
  <div
    class="flex flex-row justify-center mx-auto w-5/6 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 min-h-screen"
  >
    <Form
      class="flex flex-col gap-4 hero-content w-full"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <div
        class="card group basis-1/3 flex flex-row bg-base-100 shadow-xl w-full h-full"
      >
        <figure class="pl-8">
          <img class="mask w-36 h-36 mask-squircle bg-gray-300" />
        </figure>

        <div class="card-body w-3/6 justify-center">
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>

          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
        </div>
        <div class="card-body w-3/6 justify-center">
          <div class="form-control h-full">
            <label class="input-group input-group-vertical h-full">
              <span>Description</span>
              <Field
                name="description"
                placeholder="Description"
                class="textarea textarea-bordered h-full"
              />
            </label>
            <ErrorMessage name="description" class="bg-error" />
          </div>
        </div>
      </div>
      <div
        class="card group basis-1/3 flex flex-row bg-base-100 shadow-xl w-full h-full"
      >
        <div class="card-body w-3/6 justify-center">
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
        </div>
      </div>
      <div
        class="card group basis-1/3 flex flex-row bg-base-100 shadow-xl w-full h-full"
      >
        <div class="card-body w-3/6 justify-center">
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
          <div class="form-control">
            <label class="input-group input-group-vertical">
              <span>Title</span>
              <Field
                name="title"
                placeholder="title"
                class="input input-bordered"
              />
            </label>
            <ErrorMessage name="title" class="bg-error" />
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { inject } from 'vue';
import { useNotificationStore } from '../../../stores/notification';
import { object, string } from 'yup';

const api = inject('api');
const notificationStore = useNotificationStore();

const schema = object({
  title: string().required().trim(),
  description: string().required().max(255),
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
