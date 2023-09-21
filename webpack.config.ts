import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPathsType, envType } from "./config/build/types/configType";

export default (env: envType) => {
  const paths: BuildPathsType = {
    entry: path.resolve(__dirname, "./src/index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    port,
    isDev,
  });

  return config;
};
