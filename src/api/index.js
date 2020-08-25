import axios from "../utils/api.request";

// 获取日常扣分列表数据
export const getDailyList = (data) => {
    return axios.request({
        url: "/api/powerassess/deduction/listPage",
        data,
        method: "post"
    });
}
