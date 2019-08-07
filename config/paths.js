const path = require('path');

function resolve(relativePath) {
  return path.resolve(__dirname, relativePath);
}

module.exports = {
  root: resolve('..'),
  public: resolve('../public'),
  src: resolve('../src'),
  node_modules: resolve('../node_modules'),
};