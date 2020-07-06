"use strict";
var device = "";
var ua = navigator.userAgent;
console.log(ua)
if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
  device = "IOS";
} else if (/(Android)/i.test(ua)) {
  device = "Android";
}
function isWebview() {
  var useragent = navigator.userAgent;
  var rules = ['WebView','(iPhone|iPod|iPad)(?!.*Safari\/)','Android.*(wv|\.0\.0\.0)'];
  var regex = new RegExp(`(${rules.join('|')})`, 'ig');
  return Boolean(useragent.match(regex));
}
function isAndroid(){
  return Boolean(/(Android)/i.test(ua))
}
function isIOS(){
  return Boolean(/(iPhone|iPad|iPod|iOS)/i.test(ua))
}
device = {
  isWebview:isWebview(),
  isAndroid:isAndroid(),
  isIOS:isIOS()
}
export default device;
