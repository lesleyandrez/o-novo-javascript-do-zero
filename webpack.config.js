module.exports = {
  entry: ['babel-polyfill', './src/js-es6/main.js'],
  output: {
    filename: './src/js/__bundle.js'
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-0"],
          "plugins": ['transform-runtime']
        }
      }
    ]
  }
}
