<template>
  <header
    aria-label="Page Header"
    class="bg-gray-50 sticky top-0 z-50 bg-opacity-25 backdrop-filter backdrop-blur-lg"
  >
    <div class="navbar bg-base-100">
      <div class="flex-1 w-1/6 justify-start">
        <router-link :to="{ name: 'Home' }">
          <a class="btn btn-ghost normal-case text-xl">doctrina</a>
        </router-link>
      </div>

      <div class="flex-2 gap-2 w-5/6 justify-end">
        <button
          class="btn btn-secondary group transition-all duration-300 ease-in-out w-36 hover:w-64"
        >
          <span class="hidden group-hover:inline-flex">
            Create Your&nbsp;
          </span>
          <span> Dockerfile </span>
        </button>
        <router-link :to="{ name: 'Hub' }">
          <a
            class="btn btn-accent group normal-case transition-all duration-300 ease-in-out w-16 hover:w-36"
          >
            <span
              class="hidden group-hover:inline-flex transition-[transform] duration-1000 ease-in-out"
            >
              EXPLORE&nbsp;
            </span>
            <span> HUB</span></a
          >
        </router-link>
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered"
          />
        </div>
        <div v-if="this.loggedIn" class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <router-link :to="{ name: 'Auth' }">
          <button v-if="!this.loggedIn" class="btn btn-primary">Login</button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { useUserStore } from '../../../stores/user';

export default {
  name: 'BaseHeader',
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },

  computed: {
    loggedIn() {
      return this.userStore.loggedIn;
    },

    getName() {
      return this.userStore.name;
    },
  },
};
</script>
