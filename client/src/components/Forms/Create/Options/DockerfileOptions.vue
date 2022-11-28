<template>
  <Form class="w-full" :validation-schema="schema" @submit="onSubmit">
    <defaultBlock title="Dockerfile Options">
      <fieldWrapper>
        <DefaultField label="Expose Port">
          <template v-slot:field>
            <Field
              name="exposePort"
              placeholder="8888"
              class="input input-bordered"
            />
          </template>

          <template v-slot:error>
            <ErrorMessage name="exposePort" class="bg-error" />
          </template>
        </DefaultField>

        <DefaultField label="Your Source Path">
          <template v-slot:field>
            <Field
              name="sourcePath"
              placeholder="./"
              class="input input-bordered"
            />
          </template>

          <template v-slot:error>
            <ErrorMessage name="sourcePath" class="bg-error" />
          </template>
        </DefaultField>
      </fieldWrapper>

      <fieldWrapper>
        <DefaultField label="Container Workdir">
          <template v-slot:field>
            <Field
              name="workdir"
              placeholder="./"
              class="input input-bordered"
            />
          </template>

          <template v-slot:error>
            <ErrorMessage name="workdir" class="bg-error" />
          </template>
        </DefaultField>
      </fieldWrapper>
    </defaultBlock>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { object, string, number } from 'yup';

import defaultBlock from '../DefaultBlock';
import fieldWrapper from '../fieldWrapper';
import DefaultField from '../DefaultField';

const schema = object({
  exposePort: number().required(),
  sourcePath: string().required(),
  workdir: string().required(),
});

async function onSubmit(values) {
  console.log(values);
}
</script>
