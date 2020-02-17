const withSass = require('@zeit/next-sass')
const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
  },
 
  webpack: function (config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        })
        config.module.rules.forEach(rule => {
          if (rule.test && rule.test.toString().includes('.scss')) {
            rule.rules = rule.use.map(useRule => {
              if (typeof useRule === 'string') {
                return { loader: useRule };
              }
              if (useRule.loader === 'css-loader') {
                return {
                  oneOf: [
                    {
                      test: new RegExp('.global.scss$'),
                      loader: useRule.loader,
                      options: {},
                    },
                    {
                      loader: useRule.loader,
                      options: { modules: true }
                    },
                  ],
                };
              }
              return useRule;
            });
            delete rule.use;
          }
        });
        return config
      }
});

const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/prueba-nextjs/' : ''

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/Tabs': { page: '/Tabs' },
  }),
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  },
}