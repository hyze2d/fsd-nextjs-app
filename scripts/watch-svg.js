const { generateSVG } = require("react-svg-codegen");
const path = require("path");


generateSVG({
  iconsFolder: path.resolve(__dirname, "../src/shared/ui/icons"),
  templateFolder: path.resolve(__dirname,"..","node_modules","react-svg-codegen/templates"),
  output: "index.tsx",
  watch: true,
  storybook: true
});
