import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const buildPlugings = (
  htmlPath: string
): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: htmlPath,
  }),
  new webpack.ProgressPlugin(),
];
