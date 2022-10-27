<template>
  <div class="bg-base-200">
    <div
      class="flex flex-row justify-center mx-auto w-90 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <ul class="menu bg-base-100 h-min w-1/5 p-2 mt-4 mb-4 rounded-box">
        <li class="menu-title">
          <span>Category</span>
        </li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li class="menu-title">
          <span>Category</span>
        </li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li class="menu-title">
          <span>Category</span>
        </li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li class="menu-title">
          <span>Category</span>
        </li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
      <div class="flex hero-content flex-col w-4/5">
        <router-link
          :to="{ name: 'Detail', params: { id: 1 } }"
          class="card group flex flex-row bg-base-100 shadow-xl w-full h-44 hover:h-96 hover:scale-105 delay-300 transition-all duration-300 ease-in-out"
          v-for="step in [1, 2, 3, 4, 5, 6, 7, 8]"
          :key="step.id"
        >
          <figure class="pl-2 w-1/6">
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

          <div v-if="contentLoaded" class="card-body w-3/6">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Vue 3</div>
                <div class="badge badge-outline">Node.JS</div>
                <div class="badge badge-outline">SQL</div>
              </div>
            </h2>

            <p class="text-justify line-clamp-3 group-hover:line-clamp-none">
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

          <div v-if="contentLoaded" class="stats stats-vertical w-1/6 shadow">
            <div class="stat">
              <div class="stat-title">Downloads</div>
              <div class="stat-value">31K</div>
              <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div class="stat hidden group-hover:flex flex-col justify-center">
              <div class="stat-title">New Users</div>
              <div class="stat-value">4,200</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>

          <div v-if="!contentLoaded" class="card-body w-5/6">
            <h2 class="card-title">
              <div class="flex">
                <div
                  class="animate-pulse bg-gray-300 rounded-full w-14 h-5 mr-2"
                ></div>
                <div
                  class="animate-pulse bg-gray-300 rounded-full w-14 h-5 mr-2"
                ></div>
                <div
                  class="animate-pulse bg-gray-300 rounded-full w-14 h-5 mr-2"
                ></div>
              </div>
            </h2>

            <div>
              <p class="animate-pulse bg-gray-300 rounded-full w-full h-5"></p>
              <p
                class="mt-2 animate-pulse bg-gray-300 rounded-full w-full h-5"
              ></p>
              <p
                class="mt-2 animate-pulse bg-gray-300 rounded-full w-full h-5"
              ></p>
            </div>
          </div>

          <div v-if="!contentLoaded" class="stats stats-vertical w-1/6 shadow">
            <div class="stat items-center">
              <div
                class="animate-pulse bg-gray-300 rounded-full h-5 mr-2"
              ></div>
              <div
                class="stat-value animate-pulse bg-gray-300 rounded-full h-5 mr-2"
              ></div>
              <div
                class="stat-desc animate-pulse bg-gray-300 rounded-full h-5 mr-2"
              ></div>
            </div>
          </div>
        </router-link>

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridComponent',
  data() {
    return {
      products: [],
      contentLoaded: false,
    };
  },
};
</script>
