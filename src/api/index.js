export const details = function(id) {
  return axios.request({
    url: `http://zuul.sunjx93.top:6012/article-base/article/${id}`,
  });
};

// http://zuul.sunjx93.top:6012/article-base/articleNews/
export const articleNews = function(id) {
  return axios.request({
    url: `http://zuul.sunjx93.top:6012/article-base/articleNews/${id}`,
  });
};
export const bbsDetails = function(id) {
  return axios.request({
    url: `http://zuul.sunjx93.top:6012/sym-bbs/article/${id}`,
  });
};
