const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: { 
      alias: { 
          vue: 'vue/dist/vue.esm.js' 
      } 
  },
  module: {
      rules: [
      {
          test: /\.vue$/,
          loader: 'vue-loader'
      },
      // это будет применяться к файлам `.js`
      // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
      {
          test: /\.js$/,
          loader: 'babel-loader'
      },
      // это будет применяться к файлам `.css`
      // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
      {
          test: /\.css$/,
          use: [
          'vue-style-loader',
          'css-loader'
          ]
      }
      ]
  },
  plugins: [
      // убедитесь что подключили плагин!
      new VueLoaderPlugin()
  ]
};