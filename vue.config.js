/**
 * @Author: ZT.zhangteng
 * @Date: 2019-03-28 15:25:20
 * @Last Modified by: ZT.zhangteng
 * @Last Modified time: 2020-07-11 14:08:44
 * @Description: 项目VUe配置文件
 */
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
const mockdata = require("./src/mock/index");
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  // 打包时不生成.map文件
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"));
  },
  devServer: {
        // before: mockdata,
        // 项目开发环境的接口代理
        proxy: {
            '/sso': {
                target: 'http://118.190.135.211:9999',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/sso": ''
                }
            },
        }
    }
};
