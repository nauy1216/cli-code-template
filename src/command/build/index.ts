import path from "path";
import Logger from "../../utils/logger";
import webpack from "webpack";
import VueLoaderPlugin from "vue-loader/lib/plugin";

export default function build(entry: string) {
  const entryPath = path.resolve(process.cwd(), entry);
  Logger.info(entry);

  const compiler = webpack({
    mode: "development",
    devtool: "source-map",
    entry: {
      [entry]: entryPath
    },
    output: {
      filename: `[name].js`,
      path: path.resolve(process.cwd(), "dist")
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader"
        },
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"]
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  });

  compiler.run(stats => {
    if (!stats) {
      Logger.info("build success.");
    }
  });
}
