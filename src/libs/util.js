/**
 * @Author: ZT.zhangteng
 * @Date: 2019-04-04 16:19:44
 * @Last Modified by: ZT.zhangteng
 * @Last Modified time: 2019-05-22 08:42:10
 * @Description:
 */
import Cookies from "js-cookie";
import dayjs from "dayjs";
export const TOKEN_KEY = "token";

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find(list, f) {
  return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key));
}

export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

export function isPromise(val) {
  return val && typeof val.then === "function";
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`);
}

export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, { expires: config.cookieExpires || 1 });
};

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token && token !== "undefined") return token;
  return false;
};
export function flitterMouthType(arr) {

  arr.forEach(x => {
    x.accessTime = dayjs(x.accessTime).format("YYYY年M月");
  });
  return mapLocation(arr);
}
function mapLocation(arr) {
  let newArr = [];
  arr.forEach((address, i) => {
    let index = -1;
    let alreadyExists = newArr.some((newAddress, j) => {
      if (address.accessTime === newAddress.accessTime) {
        index = j;
        return true;
      }
    });
    if (!alreadyExists) {
      newArr.push({
        time: address.accessTime,
        location: [address]
      });
    } else {
      newArr[index].location.push(address);
    }
  });
  let nwArr = [];
  newArr.forEach((y, i) => {
    nwArr.push(y.time);
  });
  let result = [];
  unique(nwArr).forEach(x => {
    result.push({
      time: x,
      location: []
    });
  });
  newArr.forEach(x => {
    result.forEach(y => {
      if (x.time === y.time) {
        y.location.push.apply(y.location, x.location);
      }
    });
  });
  return result;
}
// 数组去重
function unique(arr) {
  if (!Array.isArray(arr)) {

    return;
  }
  return Array.prototype.filter.call(arr, function(item, index) {
    return arr.indexOf(item) === index;
  });
}
