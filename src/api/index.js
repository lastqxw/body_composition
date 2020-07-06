let listPage = function(params) {
  return axios.request({
    url: `/payment/pay/bill/count/listPage`,
    method: "post",
    data: params
  });
};
// 获取储值方式列/payment/common/queryListPayment
let queryListPayment = function() {
  return axios.request({
    url: `/payment/pay/common/queryListPayment`,
    method: "get"
  });
};
let details = function(params) {
  return axios.request({
    url: `/payment/pay/bill/detail`,
    data: params,
    method: "post"
  });
};
//获取余额类型
let balanceType = function(params) {
  return axios.request({
    url: `/payment/pay/balanceType`,
    data: params,
    method: "get"
  });
};
// payment/app/list
let appList = function(params) {
  return axios.request({
    url: `/payment/pay/app/list`,
    data: params,
    method: "get"
  });
};
// 根据商家ID获取商户详情
// /IP:8002/payment/store/{id}
let getStoreById = function(id) {
  return axios.request({
    url: `http://gwscpms.goldwind.com.cn:8002/payment/store/detailByUserId/${id}`,
    method: "get"
  });
};
// 获取商户列表
let getStoreList = function (params){
  return axios.request({
    url:`http://gwscpms.goldwind.com.cn:8002/payment/store/listAll`,
    data:params,
    method:"POST"
  })
}
export default {
  listPage,
  queryListPayment,
  details,
  balanceType,
  appList,
  getStoreById,
  getStoreList
};
