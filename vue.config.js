module.exports = {
  publicPath: process.env.NODE_ENV === 'production'

  ? '/VUETIFY-MATERIAL-DASHBOARD-MASTER'
  : '/',

  devServer: {
    //disableHostCheck: true,
    proxy: 'http://api.back.end'
  },

  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
