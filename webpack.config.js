const path = require("path");
const postCSSPlugIns = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname + "/app"),
  },
  devServer: {
    before: (app, server)=> {
      server._watch("./app/**/*.html")
    },
    contentBase: path.resolve(__dirname+ "/app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugIns } },
          },
        ],
      },
    ],
  },
};
