import handlebars from "handlebars";
import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";

export default function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setLibrary("hbs", handlebars);

  // Add data helper
  eleventyConfig.addHandlebarsHelper('data', function(path) {
    return path;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    }, 
    templateFormats: ["hbs", "html"],
  };
};
