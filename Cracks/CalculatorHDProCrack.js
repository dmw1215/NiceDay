﻿/*
 *
 *
脚本功能：计算器HD解锁会员
软件版本：1.9.4
下载地址：http://t.cn/A6xF7wam
脚本作者：我的脚会流汁
更新时间：2021.11.16

使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# 计算器HD解锁会员
^https?:\/\/www\.40sishi\.com\/(list|currency|calculator)\/user\/profile$ url script-response-body https://raw.githubusercontent.com/dmw1215/NiceDay/main/Cracks/CalculatorHDProCrack.js

[mitm] 

hostname = www.40sishi.com
*
*
*/


var objc = JSON.parse($response.body);

objc.data["vipState"] = {
    "state" : 1,
    "forever" : true,
    "startTime" : 1569600000000,
    "expireTime" : 32495476149000
};

$done({
    body : JSON.stringify(objc)
});
