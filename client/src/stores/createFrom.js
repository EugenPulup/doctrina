// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useGenerateFormState = defineStore({
  id: 'generateForm',
  state: () => ({
    language: null,
  }),

  actions: {
    changeLanguage({ language }) {
      this.$patch({
        language: language,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useGenerateFormState, import.meta.hot),
  );
}
