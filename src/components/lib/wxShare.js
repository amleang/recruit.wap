export const wxShareConfig = function () {
    this.http.get("").then(res => {
        wx.config({
            debug: false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
        });
    });
    wx.ready(function () {
        // 判断当前版本是否支持指定 JS 接口，支持批量判断
        wx.checkJsApi({
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"],
            success: function (res) {
                console.log(JSON.stringify(res));
            }
        });
        // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline({
            title: "牛职工作网",
            link: location.href,
            imgUrl: "https://niuzhigongzuo.com/static/images/logo@x1024.jpg",
            success: function () {
                alertStr("分享成功！");
            },
            cancel: function () {
                alertStr("用户取消分享！");
            },
            fail: function (res) {
                console.log(JSON.stringify(res));
                alertStr("分享失败！");
            }
        });

        // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
            title: "牛职工作网",
            desc: "让求职者高薪就业，从业者终生受益！",
            link: location.href,
            imgUrl: "https://niuzhigongzuo.com/static/images/logo@x1024.jpg",
            type: "link",
            success: function () {
                alertStr("分享成功！");
            },
            cancel: function () {
                alertStr("用户取消分享！");
            },
            fail: function (res) {
                console.log(JSON.stringify(res));
                alertStr("分享失败！");
            }
        });
    });
}

export const wxhideMenu = function () {
    this.http.get("").then(res => {
        wx.config({
            debug: false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
        });
    });
    wx.ready(function () {
        // 判断当前版本是否支持指定 JS 接口，支持批量判断
        wx.checkJsApi({
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"],
            success: function (res) {
                console.log(JSON.stringify(res));
            }
        });
        wx.hideMenuItems({
            menuList: ["menuItem:share:timeline", "menuItem:copyUrl", "menuItem:share:appMessage", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:editTag", "menuItem:delete", "menuItem:copyUrl", "menuItem:originPage", "menuItem:readMode", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email", "menuItem:share:brand"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮
        });
    });
}