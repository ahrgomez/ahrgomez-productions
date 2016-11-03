var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  output: {
    path: require("path").resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          plugins: ['react-relay'],
          presets: [
            "es2015", "react", "stage-0", {
              "plugins": [
                "./schema-build/babelRelayPlugin"
              ]
            }
          ]
        },
        //query: {
        //  plugins: ['react-relay'],
        //},
        loaders: [
          'babel'//?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
      }
    ]
  }}