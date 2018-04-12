/**
* @Author: 骆金参
* @Date:   2017-03-25T00:20:55+08:00
* @Email:  1095947440@qq.com
* @Filename: site.ts
* @Last modified by:   骆金参
* @Last modified time: 2017-03-25T13:58:57+08:00
*/


export class Site {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public alexa?: number // 可选
  ) {  }
}
