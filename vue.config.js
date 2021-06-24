const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const pxtovw = require('postcss-px-to-viewport')
module.exports = {
  outputDir: 'dist',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? 'https://www.abc.com/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            exclude: '/pc/',
            propList: ['*']
          }),
          // eslint-disable-next-line
          new pxtovw({
            unitToConvert: 'px', // 需要转换的单位，默认为"px"；
            viewportWidth: 1181, // 设计稿的视口宽度
            unitPrecision: 5, // 单位转换后保留的小数位数
            propList: ['*'], // 要进行转换的属性列表,*表示匹配所有,!表示不转换
            viewportUnit: 'vw', // 转换后的视口单位
            fontViewportUnit: 'vw', // 转换后字体使用的视口单位
            selectorBlackList: [], // 不进行转换的css选择器，继续使用原有单位
            minPixelValue: 1, // 设置最小的转换数值
            mediaQuery: false, // 设置媒体查询里的单位是否需要转换单位
            replace: true, // 是否直接更换属性值，而不添加备用属性
            exclude: [/mobile/] // 忽略某些文件夹下的文件
          })
        ]
      }
    }
  }
  // devServer: {
  //   proxy: process.env.VUE_APP_BASEURL
  // }
}
