/**
 * Created by 王冬 on 2017/12/15.
 * QQ: 20004604
 * weChat: qq20004604
 */
import {insertTemplate} from '../../common/public'

const $ = require('../../common/jquery.min')

insertTemplate(require('./async.html'), $('#async-box'))

let imgArray = []

$("#random").click(function () {
    if (imgArray.length === 0) {
        imgArray.push(require('../../pages/userInfo/images/1.jpg'));
        imgArray.push(require('../../pages/userInfo/images/2.jpg'));
        imgArray.push(require('../../pages/userInfo/images/3.jpg'));
        imgArray.push(require('../../pages/userInfo/images/4.jpg'));
        imgArray.push(require('../../pages/userInfo/images/5.jpg'));
    }
    let img = $(`<img src='${imgArray[0]}'>`)
    imgArray.shift();
    $("#img-container").html('')
    $("#img-container").append(img);
})
