import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPathsType } from "./config/build/types/configType";

const paths: BuildPathsType = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const config: webpack.Configuration = buildWebpackConfig({
  paths,
  mode,
});

export default config;
