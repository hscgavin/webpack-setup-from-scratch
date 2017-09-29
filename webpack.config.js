const path = require('path');
module.exports = {
  entry:  './app/index.js', // entry file
  output: {
    path: path.resolve(__dirname, 'build'), // output with absolute path
    filename: "bundle.js" // bundle file name
  }
};