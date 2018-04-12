import { Component } from '@angular/core';
@Component({
  selector: 'loop-back',
  template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
// 名叫 box 的模板引用变量
export class LoopbackComponent { }
