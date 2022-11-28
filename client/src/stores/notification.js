// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useNotificationStore = defineStore({
  id: 'notification',
  state: () => ({
    buffer: [],
  }),

  actions: {
    addNotification({ message, type }) {
      this.$patch({
        buffer: [...this.buffer, { message, type }],
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useNotificationStore, import.meta.hot),
  );
}
