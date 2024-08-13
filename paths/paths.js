import path from "path";

const { dirname } = import.meta;
const rootDir = path.join(dirname, "..");

const utilsPath = path.join(rootDir, "utils");
const publicPath = path.join(rootDir, "public");
// https://stackoverflow.com/questions/27464168/how-to-include-scripts-located-inside-the-node-modules-folder
// https://stackoverflow.com/questions/50913259/can-we-serve-static-files-in-a-node-module-for-a-server
const SVGInjectPath = path.join(
  rootDir,
  "node_modules/@iconfu/svg-inject/dist"
);
const viewsPagesPath = path.join(rootDir, "views/pages");
const viewsPartialsPath = path.join(rootDir, "views/partials");

const staticPaths = [utilsPath, publicPath, SVGInjectPath];
const viewsPaths = [viewsPagesPath, viewsPartialsPath];

export { staticPaths, viewsPaths };
