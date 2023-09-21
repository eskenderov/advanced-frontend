import { buildLoaders } from "./buildLoaders";
import { buildPlugings } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/configType";
import webpack from "webpack";

export const buildWebpackConfig = ({
  mode,
  paths,
}: BuildOptions): webpack.Configuration => {
  const { entry, build, html } = paths;
  
  return {
    mode: mode,

    entry,

    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true,
    },

    plugins: buildPlugings(html),

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),
  };
};
