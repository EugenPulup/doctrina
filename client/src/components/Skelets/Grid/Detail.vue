<template>
  <div
    class="grid grid-rows-3 grid-flow-col gap-4 hero-content flex-col w-full"
  >
    <div
      class="card group col-span-3 flex flex-row bg-base-100 shadow-xl w-full h-full"
    >
      <figure class="pl-8">
        <div
          class="mask w-24 h-24 mask-squircle bg-gray-300 animate-pulse"
        ></div>
      </figure>

      <div class="card-body w-3/6 justify-center">
        <div class="card-actions">
          <div
            class="badge badge-secondary animate-pulse bg-gray-300 mr-2 w-16 fill-gray-300 border-gray-300"
          ></div>
          <div
            class="badge badge-outline animate-pulse bg-gray-300 mr-2 w-16 fill-gray-300 border-gray-300"
          ></div>
          <div
            class="badge badge-outline animate-pulse bg-gray-300 mr-2 w-16 fill-gray-300 border-gray-300"
          ></div>
          <div
            class="badge badge-outline animate-pulse bg-gray-300 mr-2 w-16 fill-gray-300 border-gray-300"
          ></div>
        </div>
        <h2
          class="card-title animate-pulse bg-gray-300 mr-2 w-36 h-5 rounded-full"
        ></h2>
        <h3 class="text-justify h-1/5">
          <div
            class="animate-pulse bg-gray-300 mr-2 w-96 rounded-full h-5 mb-3"
          ></div>
          <div
            class="animate-pulse bg-gray-300 mr-2 w-96 rounded-full h-5 mb-3"
          ></div>
          <div
            class="animate-pulse bg-gray-300 mr-2 w-96 rounded-full h-5 mb-3"
          ></div>
        </h3>
      </div>

      <div class="mockup-code w-1/6 m-8 animate-pulse bg-gray-300"></div>
    </div>

    <div
      class="card group row-span-2 col-span-2 bg-base-100 shadow-xl w-full h-full"
    >
      <div class="card-body w-full">
        <div class="text-justify">
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
          <div
            class="animate-pulse bg-gray-300 border-gray-300 h-6 rounded-full w-full mb-5 text-gray-300"
          >
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </div>
        </div>
      </div>
    </div>

    <div class="card group row-span-2 bg-base-100 shadow-xl w-full h-full">
      <div class="card-body">
        <h2 class="card-title justify-center">
          <div
            class="badge badge-secondary animate-pulse bg-gray-300 border-gray-300 w-24"
          ></div>
          <div
            class="badge badge-secondary animate-pulse bg-gray-300 border-gray-300 w-12"
          ></div>
        </h2>

        <div class="card-actions justify-text">
          <div
            v-for="badge in this.relatedDockerfiles"
            :key="badge.id"
            class="badge animate-pulse bg-gray-300 mr-2 w-16 fill-gray-300 border-gray-300"
            :class="`badge-${
              this.badgeTypes[
                Math.floor(Math.random() * this.badgeTypes.length)
              ]
            }`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGridSkeleton',
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

      badgeTypes: ['primary', 'secondary', 'accent', 'ghost'],
    };
  },
};
</script>
