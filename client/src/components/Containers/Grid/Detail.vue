<template>
  <div class="bg-base-200">
    <div
      class="flex flex-row justify-center mx-auto w-90 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 h-screen"
    >
      <DetailGridSkeleton v-if="!contentLoaded"> </DetailGridSkeleton>
      <div
        v-if="contentLoaded"
        class="grid grid-rows-3 grid-flow-col gap-4 hero-content flex-col w-full"
      >
        <div
          class="card group col-span-3 flex flex-row bg-base-100 shadow-xl w-full h-full"
        >
          <figure class="pl-8">
            <img
              class="mask w-24 h-24 mask-squircle bg-gray-300"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              :class="{
                'animate-pulse': !contentLoaded,
              }"
              @load="contentLoaded = true"
            />
          </figure>

          <div class="card-body w-3/6 justify-center">
            <div class="card-actions">
              <div class="badge badge-secondary">NEW</div>
              <div class="badge badge-outline">Vue 3</div>
              <div class="badge badge-outline">Node.JS</div>
              <div class="badge badge-outline">SQL</div>
            </div>
            <h2 class="card-title">Shoes!</h2>
            <h3 class="text-justify h-1/5">
              If a dog chews shoes whose shoes does he choose? Lorem ipsum
              dolor,
            </h3>
          </div>

          <div class="mockup-code w-1/6 m-8">
            <pre data-prefix="$"><code>npm i daisyui</code></pre>
          </div>
        </div>

        <div
          class="card group row-span-2 col-span-2 flex flex-row bg-base-100 shadow-xl w-full h-full"
        >
          <div class="card-body w-3/6">
            <p class="text-justify line-clamp-3">
              If a dog chews shoes whose shoes does he choose? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Exercitationem
              maiores sed officia nihil enim veritatis magni ut, beatae
              similique? Magni itaque iste optio nulla esse corporis
              necessitatibus nihil id vero. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quae. Lorem
            </p>
          </div>
        </div>

        <div
          class="card group row-span-2 flex flex-row bg-base-100 shadow-xl w-full h-full"
        >
          <div class="card-body w-3/6">
            <h2 class="card-title justify-center">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
              <div class="badge badge-info hidden">NEW</div>
              <div class="badge badge-error hidden">NEW</div>
              <div class="badge badge-accent hidden">NEW</div>
              <div class="badge badge-primary hidden">NEW</div>
              <div class="badge badge-warning hidden">NEW</div>
            </h2>

            <div class="card-actions justify-text">
              <div
                v-for="badge in this.relatedDockerfiles"
                :key="badge.id"
                class="badge cursor-pointer hover:scale-110"
                :class="`badge-${
                  this.badgeTypes[
                    Math.floor(Math.random() * this.badgeTypes.length)
                  ]
                }`"
              >
                {{ badge }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailGridSkeleton from '../../Skelets/Grid/Detail.vue';
export default {
  name: 'GridComponent',
  components: {
    DetailGridSkeleton,
  },
  data() {
    return {
      dockerfile: {
        name: 'Dockerfile',
        description: 'Dockerfile for the project',
      },
      contentLoaded: false,

      relatedDockerfiles: [
        'php8',
        'php7',
        'php7.4',
        'php7.3',
        'php7.2',
        'php7.1',
        'php7.0',
        'php5.6',
        'php5.5',
        'Node.js 14',
        'Node.js 12',
        'Node.js 10',
        'Node.js 8',
        'Node.js 6',
        'Node.js 4',
        'Ruby 2.7',
        'Ruby 2.6',
        'Ruby 2.5',
        'Ruby 2.4',
        'Ruby 2.3',
        'Ruby 2.2',
        'Ruby 2.1',
        'Ruby 2.0',
        'Ruby 1.9',
        'Ruby 1.8',
        'Python 3.9',
        'Python 3.8',
        'Python 3.7',
        'Python 3.6',
        'Python 3.5',
        'Python 3.4',
        'Python 3.3',
        'Python 3.2',
      ],

      badgeTypes: [
        'primary',
        'secondary',
        'accent',
        'ghost',
        'info',
        'success',
        'warning',
        'error',
      ],
    };
  },

  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => {
        this.contentLoaded = true;
      }, 1000);
    });
  },
};
</script>
