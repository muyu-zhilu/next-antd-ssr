const withLess = require('@zeit/next-less');
const WithCss = require('@zeit/next-css');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withLess(
  WithCss({
    lessLoaderOptions: {
      modifyVars: {
        'primary-color': '#1DA57A'
      },
      javascriptEnabled: true
    }
  })
);
