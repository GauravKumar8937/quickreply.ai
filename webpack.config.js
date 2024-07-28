const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  // Module rules
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Translates CSS into CommonJS modules
          'sass-loader'   // Compiles Sass to CSS
        ]
      }
    ]
  },
  
  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};


