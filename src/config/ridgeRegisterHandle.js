// device只是一个用来判断项目运行在哪个平台而已
import device from "./device";
let version = null
let jsBridgeRegisterHandle = {};
// vue插件写法---install方法
jsBridgeRegisterHandle.install = function (Vue) {
    let jsBridge = Vue.prototype.$jsBridge;
    let jsBridgeCmd = Vue.prototype.$jsBridgeCmd;
    Vue.prototype.$myPlugs = {
        getOrderType(callback) {
            if (device.webView) { //过滤掉pc端，wx小程序等等，只认App端
                jsBridge.callHandler(jsBridgeCmd["getOrderType"], {}, function (
                    response
                ) {
                    callback && callback(response);
                });
            }
        },
    };
};
export default jsBridgeRegisterHandle;
