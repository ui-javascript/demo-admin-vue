/**
* @Author: 骆金参
* @Date:   2017-03-25T00:20:55+08:00
* @Email:  1095947440@qq.com
* @Filename: site.ts
* @Last modified by:   骆金参
* @Last modified time: 2017-03-25T13:58:57+08:00
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Site = (function () {
    function Site(id, name, url, alexa // 可选
    ) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.alexa = alexa; // 可选
    }
    return Site;
}());
exports.Site = Site;
//# sourceMappingURL=site.js.map