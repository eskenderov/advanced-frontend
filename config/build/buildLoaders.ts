import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const typesScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typesScriptLoader];
};