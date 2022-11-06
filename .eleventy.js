module.exports = function (eleventyConfig) {
    //eleventyConfig.addWatchTarget("./src/scss/");

    eleventyConfig.setBrowserSyncConfig({
      files: './dist/css/**/*.css'
    });
  
  /*   eleventyConfig.setBrowserSyncConfig({
      browser: "firefox"
    }); */

    return {
      dir: {
        input: "src/html",
        output: "dist",
      },
    };

   
  };