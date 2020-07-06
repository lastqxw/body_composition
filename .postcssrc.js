module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 16,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
};
