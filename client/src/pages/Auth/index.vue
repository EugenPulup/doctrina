<template>
  <DefaultLayout>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content w-full flex-col lg:flex-row-reverse">
        <LoginForm v-if="activeTab === 'login'">
          <div class="tabs tabs-boxed px-0 py-0">
            <a class="tab tab-active w-1/2">Login</a>
            <a class="tab w-1/2" @click="toggleTab('signup')">Register</a>
          </div>
        </LoginForm>
        <SignUpForm v-if="activeTab === 'signup'">
          <div class="tabs tabs-boxed px-0 py-0">
            <a class="tab w-1/2" @click="toggleTab('login')">Login</a>
            <a class="tab tab-active w-1/2">Register</a>
          </div>
        </SignUpForm>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import LoginForm from '../../components/Forms/Login/LoginForm.vue';
import SignUpForm from '../../components/Forms/SignUp/index.vue';
import DefaultLayout from '../../layouts/default.layout.vue';

export default {
  name: 'Auth_Page',
  components: {
    LoginForm,
    SignUpForm,
    DefaultLayout,
  },
  data: () => ({
    activeTab: 'login',
    tabs: ['login', 'signup'],
  }),

  methods: {
    toggleTab(tab) {
      this.activeTab = this.tabs.includes(tab) ? tab : 'login';
    },
  },
};
</script>
