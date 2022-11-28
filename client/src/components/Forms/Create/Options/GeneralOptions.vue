<template>
  <Form class="w-full" :validation-schema="schema" @submit="onSubmit">
    <defaultBlock title="General Options">
      <fieldWrapper>
        <figure class="pl-8">
          <img class="mask w-36 h-36 mask-squircle bg-gray-300" />
        </figure>
      </fieldWrapper>

      <fieldWrapper>
        <DefaultField label="Title">
          <template v-slot:field>
            <Field
              name="title"
              placeholder="title"
              class="input input-bordered"
            />
          </template>

          <template v-slot:error>
            <ErrorMessage name="title" class="bg-error" />
          </template>
        </DefaultField>

        <DefaultField label="Language">
          <template v-slot:field>
            <Field
              class="select select-bordered w-full"
              name="language"
              as="select"
              @change="onChange($event)"
            >
              <option value="">Select language</option>
              <option value="Node">Node.JS</option>
              <option value="PHP">PHP</option>
            </Field>
          </template>

          <template v-slot:error>
            <ErrorMessage name="language" class="bg-error" />
          </template>
        </DefaultField>
      </fieldWrapper>

      <fieldWrapper>
        <DefaultField label="Description">
          <template v-slot:field>
            <Field
              name="description"
              placeholder="description"
              class="input input-bordered"
              as="textarea"
            />
          </template>

          <template v-slot:error>
            <ErrorMessage name="description" class="bg-error" />
          </template>
        </DefaultField>
      </fieldWrapper>
    </defaultBlock>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { object, string } from 'yup';
import { useGenerateFormState } from '../../../../stores/createFrom';

import defaultBlock from '../DefaultBlock';
import fieldWrapper from '../fieldWrapper';
import DefaultField from '../DefaultField';

const generateFormStore = useGenerateFormState();

async function onChange(event) {
  generateFormStore.changeLanguage({ language: event.target.value });
}

const schema = object({
  title: string().required().trim(),
  description: string().required().max(255),
  language: string().required(),
});

async function onSubmit(values) {
  console.log(values);
}
</script>
