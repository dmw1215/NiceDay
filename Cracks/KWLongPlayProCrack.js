/*
 *
 *
脚本功能：酷我2496解锁会员
软件版本：1.2.2
下载地址：http://t.cn/A6xF4Xoq
脚本作者：我的脚会流汁
更新时间：2021.11.16

使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 酷我2496解锁会员
^https?:\/\/api_2496\.kuwo\.cn\/front\/user\/vipstatus$ url script-response-body https://raw.githubusercontent.com/dmw1215/NiceDay/main/Cracks/KWLongPlayProCrack.js

[mitm] 

hostname = api_2496.kuwo.cn
*
*
*/


var body = $response.body;
var objc = JSON.parse(body);

objc.data = {
    "vipstatus": 1,
    "expiration_time": "2999-09-28"
};

body = JSON.stringify(objc);
$done({ body });
