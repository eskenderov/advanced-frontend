import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugings } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/configType";
import webpack from "webpack";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { paths, mode } = options;
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
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
};
