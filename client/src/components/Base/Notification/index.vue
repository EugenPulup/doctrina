<template>
  <div
    class="alert shadow-lg absolute top-24 right-0 w-1/6 mt-5 mr-5 z-50"
    :class="`alert-${notificationStore.$state.buffer[0].type}`"
    v-if="notificationStore.$state.buffer.length"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ notificationStore.$state.buffer[0].message }} </span>
    </div>
  </div>
</template>

<script>
import { useNotificationStore } from '../../../stores/notification';

export default {
  name: 'NotificationComponent',
  setup() {
    const notificationStore = useNotificationStore();

    // eslint-disable-next-line no-unused-vars
    let cleanTimeout = null;

    notificationStore.$subscribe(() => {
      if (notificationStore.$state.buffer.length !== 0) {
        cleanTimeout = setTimeout(() => {
          notificationStore.$state.buffer.shift();
        }, 5000);
      }
    });

    return { notificationStore };
  },
};
</script>
