<template>
  <Form class="w-full" :validation-schema="schema" @submit="onSubmit">
    <defaultBlock title="NodeJs Options">
      <fieldWrapper>
        <DefaultField label="Version">
          <template v-slot:field>
            <Field
              class="select select-bordered w-full"
              name="version"
              as="select"
            >
              <option value="">16 LTS</option>
              <option value="8.0">8.0</option>
              <option value="8.1">8.1</option>
            </Field>
          </template>

          <template v-slot:error>
            <ErrorMessage name="version" class="bg-error" />
          </template>
        </DefaultField>

        <DefaultField label="Framework">
          <template v-slot:field>
            <Field
              class="select select-bordered w-full"
              name="framework"
              as="select"
            >
              <option selected value="">None</option>
              <option value="NestJs">NestJs</option>
              <option value="NuxtJs">NuxtJs</option>
              <option value="NextJs">NextJs</option>
            </Field>
          </template>

          <template v-slot:error>
            <ErrorMessage name="framework" class="bg-error" />
          </template>
        </DefaultField>
      </fieldWrapper>

      <fieldWrapper>
        <DefaultField label="Front controller path">
          <template v-slot:field>
            <Field
              name="frontControllerPath"
              placeholder="./index.php"
              class="input input-bordered"
            />
          </template>

          <template v-slot:error>
            <ErrorMessage name="frontControllerPath" class="bg-error" />
          </template>
        </DefaultField>
      </fieldWrapper>
    </defaultBlock>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup';

import defaultBlock from '../DefaultBlock';
import fieldWrapper from '../fieldWrapper';
import DefaultField from '../DefaultField';

const schema = object({
  version: string(),
  framework: string(),
  frontControllerPath: string().required(),
});

async function onSubmit(values) {
  console.log(values);
}
</script>
