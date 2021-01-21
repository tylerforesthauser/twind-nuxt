<template>
  <div :class="tw('flex justify-center items-center text-center min-h-screen')">
    <div
      :class="
        tw(
          'lg:mx-0 border-gray-300 rounded-t-lg font-medium leading-6 -mx-4 px-3 py-8 text-center'
        )
      "
    >
      <h2 :class="tw('text-3xl leading-normal py-8')">
        Hello from <span :class="tw('text-nuxt-lightgreen')">{{ name }}</span>
      </h2>
      <p :class="tw('leading-6 mx-0 mt-0 mb-6')">
        The below content is rendered client-side only.
      </p>
      <ClientOnly>
        <div :class="tw('container mt-8')">
          <h2 :class="tw('text-3xl font-medium pt-10 pb-8 text-center')">
            Client Only
          </h2>
          <p :class="tw('leading-loose text-dark-onSurfaceSecondary')">
            Donec volutpat orci tortor, eget hendrerit nisl volutpat in.
            Phasellus posuere, orci ut varius tincidunt, felis augue suscipit
            magna, quis hendrerit nulla velit eu ipsum. Nunc at tellus sed augue
            vulputate luctus sit amet sed dui. Pellentesque libero purus,
            aliquam quis massa ac, fringilla blandit odio. Phasellus vitae
            porttitor ante. Quisque at lacus libero. Aliquam non convallis orci.
            Sed accumsan mi quam, quis commodo enim laoreet eget. Fusce nec
            commodo est. Maecenas quis lobortis nisl. Phasellus at nunc finibus,
            convallis elit dictum, condimentum mi. Donec fermentum erat eu purus
            egestas, non commodo turpis condimentum. Praesent non lectus luctus,
            lacinia tortor id, finibus dolor.
          </p>
        </div>
      </ClientOnly>
      <p :class="tw('mt-8')">
        <AppButton
          to="/"
          variant="secondary"
          :class="tw('sm:mr-4 py-3 px-6 text-base')"
        >
          Back to home
        </AppButton>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client",
    };
  },
  computed: {
    tw() {
      return this.$tw;
    },
  },
};
</script>
