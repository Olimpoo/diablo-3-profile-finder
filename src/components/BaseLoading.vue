<template>
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <b-spinner
        class="spinner"
        label="Loading..."
        :type="type"
        :variant="variant"
      />
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  props: {
    // Allowed variants for the spinner
    variant: {
      required: false,
      type: String,
      default: 'info',
      // validate possible values for this prop
      validator: (value) =>
        // eslint-disable-next-line
        [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark',
        ].indexOf(value) !== -1,
    },
    type: {
      required: false,
      type: String,
      default: 'grow',
      validator: (value) => ['border', 'grow'].indexOf(value) !== -1,
    },
  },
};
</script>

<style lang="stylus">
.spinner-wrapper
  .spinner
    width 4rem
    height 4rem
</style>
