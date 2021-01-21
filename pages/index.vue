<template>
  <section>
    <div>
      <Logo :width="350" />
      <h1 :class="tw('text-8xl text-dark-onSurfacePrimary font-medium mb-6')">
        NUXT<span :class="tw('text-nuxt-lightgreen')">JS</span> + Twind
      </h1>
      <h2
        :class="
          tw(
            'text-4xl xl:text-5xl text-dark-onSurfacePrimary font-light leading-tight mb-6'
          )
        "
      >
        Tailwind-in-JS for Nuxt!
      </h2>
      <div :class="tw('pt-4')">
        <AppButton
          href="https://nuxtjs.org/"
          target="_blank"
          variant="primary"
          data-cy="get-started"
          :class="tw('sm:mr-4 mb-4 py-3 px-6')"
        >
          Documentation
          <IconLink
            slot="icon"
            :class="tw('inline-block stroke-current w-5 h-5')"
          />
        </AppButton>
        <AppButton
          to="/about"
          variant="secondary"
          :class="tw('sm:mr-4 mb-4 py-3 px-6')"
        >
          About
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    tw() {
      return this.$tw;
    },
  },
};
</script>
