module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin')
    eleventyConfig.addPassthroughCopy('./src/projects/media')
    eleventyConfig.addPassthroughCopy('./src/resumes/media')

    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
    }