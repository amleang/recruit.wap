export const checkLogin = function () {
  let wxuser = localStorage.getItem("hjct_user");
  if (wxuser != null)
    return true;
  else
    return false;
}
export const TMap = function () {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(qq) //注意这里
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js";
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
export const formatDate = function (time, fmt) {
  if (time) {
    if (!fmt)
      fmt = "yyyy-MM-dd";
    let date = new Date(time);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  } else
    return "";
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/**
 * 获取微信用户信息
 */
export const getWxItem = function () {
  let wxuser = localStorage.getItem("hjct_user");
  if (wxuser) {
    return JSON.parse(wxuser);
  }
  else
    return wxuser;
}

/**
 * 设置微信用户信息
 */
export const setWxItem = function (wxUser) {
  let wxuserStr = JSON.stringify(wxUser);
  localStorage.setItem("hjct_user", wxuserStr);
}