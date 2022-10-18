<template>
  <div
    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center"
  >
    <slot></slot>

    <div class="card-body justify-center">
      <!-- STEP-1 -->
      <div class="form-control" v-if="this.currentStep === 1">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <label class="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            class="input input-bordered"
          />
        </label>
      </div>
      <div class="form-control" v-if="this.currentStep === 1">
        <label class="label">
          <span class="label-text">First Name</span>
        </label>
        <label class="input-group">
          <span>Text</span>
          <input type="text" placeholder="Dilan" class="input input-bordered" />
        </label>
        <label class="label">
          <span class="label-text">Last Name</span>
        </label>
        <label class="input-group">
          <span>Text</span>
          <input
            type="text"
            placeholder="Osfold"
            class="input input-bordered"
          />
        </label>
      </div>

      <!-- STEP-2 -->
      <div class="form-control" v-if="this.currentStep === 2">
        <label class="label">
          <span class="label-text">UserName</span>
        </label>
        <label class="input-group">
          <span>Icon</span>
          <input
            type="text"
            placeholder="SomeUsername"
            class="input input-bordered"
          />
        </label>
      </div>
      <div class="form-control" v-if="this.currentStep === 2">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <label class="input-group">
          <span>Text</span>
          <input
            type="password"
            placeholder="********"
            class="input input-bordered"
          />
        </label>
        <label class="label">
          <span class="label-text">Confirm Password</span>
        </label>
        <label class="input-group">
          <span>Text</span>
          <input
            type="password"
            placeholder="********"
            class="input input-bordered"
          />
        </label>
      </div>

      <!-- STEP-3 -->
      <div class="form-control mt-6 mb-6" v-if="this.currentStep === 3">
        <button class="btn btn-primary">Register</button>
      </div>

      <ul class="steps steps-vertical lg:steps-horizontal">
        <li
          class="step"
          v-for="step in steps"
          :key="step.id"
          :class="step.status"
          @click="switchStep(step.id)"
        >
          {{ step.title }}
        </li>
      </ul>
      <!-- <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    currentStep: 1,
    steps: [
      {
        id: 1,
        title: 'Step 1',
        description: 'This is the first step',
        status: 'step-info',
      },
      {
        id: 2,
        title: 'Step 2',
        description: 'This is the second step',
        status: '',
      },
      {
        id: 3,
        title: 'Step 3',
        description: 'This is the third step',
        status: '',
      },
    ],
  }),
  methods: {
    switchStep(stepId) {
      this.currentStep = stepId;
      //   if (stepId > 1) {
      // this.steps[stepId - 2].status = 'step-info';
      // this.steps[stepId - 1].status = 'step-info step-error';
      //   }

      //   if (stepId < this.currentStep) {
      this.steps = this.steps.map((step) => {
        if (step.id < stepId) {
          step.status = 'step-info';
        }
        if (step.id === stepId) {
          step.status = 'step-info step-error';
        }

        if (step.id > stepId) {
          step.status = '';
        }
        return step;
      });
      //   }
    },
  },
};
</script>
