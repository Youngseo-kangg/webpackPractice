const path = require('path');

module.exports = {
  // * 어떤 작업을 할지 지정하는 mode : production전용
  mode: 'production',
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js',
  },
};
