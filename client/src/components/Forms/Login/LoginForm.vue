<template>
  <div
    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center"
  >
    <slot></slot>

    <Form
      class="card-body justify-center"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <div class="form-control">
        <label class="label">
          <span class="label-text">UserName</span>
        </label>
        <label class="input-group">
          <span>UsNa</span>
          <Field
            name="username"
            placeholder="someName"
            class="input input-bordered"
          />
        </label>
        <ErrorMessage name="username" class="bg-error" />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <label class="input-group">
          <span>Passw</span>
          <Field
            name="password"
            type="password"
            placeholder="_________"
            class="input input-bordered"
          />
        </label>
        <ErrorMessage name="password" class="bg-error" />
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span>
          <input type="checkbox" checked="checked" class="checkbox" />
        </label>
        <label class="label">
          <a href="#" class="label-text-alt link link-hover"
            >Forgot password?</a
          >
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
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
  username: string().required().trim(),
  password: string().required().min(6),
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
