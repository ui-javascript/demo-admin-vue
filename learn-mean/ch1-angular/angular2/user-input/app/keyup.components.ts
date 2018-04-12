import { Component } from '@angular/core';
@Component({
  selector: 'key-up1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values = '';
  /*
  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
  */
  // with strong typing
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
//////////////////////////////////////////
// 只在用户按下回车 (enter) 键的时候才获取输入框的值
@Component({
  selector: 'key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
//////////////////////////////////////////
// 失去焦点的时候更新values
@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values = '';
}
//////////////////////////////////////////

@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="values=box.value"
      (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v4 {
  values = '';
}
