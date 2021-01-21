const { resolve } = require("path");
const defu = require("defu");
const { asyncVirtualSheet, getStyleTag } = require("twind/server");

module.exports = function (moduleOptions) {
  const { nuxt, addPlugin } = this;

  const defaults = {
    preflight: true,
    theme: {},
    darkMode: "media",
    mode: "silent",
    ssr: true
  };

  const options = defu(moduleOptions, nuxt.options.twind, defaults);

  if (options.ssr) {
    nuxt.hook("vue-renderer:ssr:prepareContext", (ssrContext) => {
      ssrContext.$twSheet = asyncVirtualSheet();
      ssrContext.$twSheet.reset();
    });

    nuxt.hook("vue-renderer:ssr:templateParams", (params, ssrContext) => {
      params.HEAD += getStyleTag(ssrContext.$twSheet);
      ssrContext.$twSheet.disable();
    });
  }

  addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "twind.js",
    options
  });
};
