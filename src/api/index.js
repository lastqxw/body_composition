export const details = function(data) {
  return axios.request({
    url: `/sso/authApi/getNoticeDetail`,
    data,
    method:'POST'
  });
};
