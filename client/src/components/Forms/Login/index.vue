<template>
  <div
    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center"
  >
    <slot></slot>

    <div class="card-body justify-center">
      <div class="form-control">
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
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <label class="input-group">
          <span>Passw</span>
          <input
            type="password"
            placeholder="_________"
            class="input input-bordered"
          />
        </label>
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span>
          <input type="checkbox" checked="checked" class="checkbox" />
        </label>
        <label class="label">
          <a href="#" class="label-text-alt link link-hover"
            >Forgot password?</a
          >
        </label>
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
};
</script>
