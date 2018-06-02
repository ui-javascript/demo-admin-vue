import { Component } from '@angular/core';

@Component({
  selector: 'click-me2',
  template: `
    <button (click)="onClickMe2($event)">不! .. 点我!</button>
    {{clickMessage}}`
})
export class ClickMe2Component {
  clickMessage = '';
  clicks = 1;

  // 非强类型
  onClickMe2(event: any) {
    let evtMsg = event ? ' 触发事件的元素是:' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
