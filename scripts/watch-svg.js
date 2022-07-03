const { generateSVG } = require("react-svg-codegen");
const path = require("path");

generateSVG({
  iconsFolder: resolveRoot("src/shared/ui/icons"),
  templateFolder: resolveRoot("node_modules", "react-svg-codegen/templates"),
  output: "index.tsx",
  watch: true,
  storybook: true
});

function resolveRoot(...segments) {
  return path.resolve(__dirname, "..", ...segments);
}
