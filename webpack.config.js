const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  devServer: {
    port: 8080,
    hot: isDev,
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: filename("js")
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        // Preprocess our own .sass files
        test: /\.module\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "@teamsupercell/typings-for-css-modules-loader",
          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css")
    })
  ]
};
