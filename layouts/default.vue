<template>
  <div
    :class="
      tw(({ tw }) => {
        const styles = {
          ':global': {
            html: apply('bg-dark-surface text-dark-onSurfacePrimary'),
          },
        };
        return styles;
      })
    "
    class="global"
  >
    <div
      :class="tw('flex justify-center items-center text-center min-h-screen')"
      class="layout"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { apply } from "twind/css";

export default {
  computed: {
    tw() {
      return this.$tw;
    },
    apply() {
      return apply;
    },
  },
};
</script>
