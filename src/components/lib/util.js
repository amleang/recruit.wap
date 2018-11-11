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