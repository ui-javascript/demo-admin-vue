import { Component } from '@angular/core'; // 导入核心
import { Site }    from './site'; // 导入site类

@Component({
  moduleId: module.id,
  selector: 'site-form', // 通过一个 <site-form> 标签，把此表单扔进父模板中
  templateUrl: 'site-form.component.html' 
})
export class SiteFormComponent {
  urls = ['www.runoob.com', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
  model = new Site(1, '菜鸟教程', this.urls[0], 10000);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { return JSON.stringify(this.model); } // 返回这个模型的JSON形式
  active = true;
  newSite() {
    this.model = new Site(5, '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  // 我们给组件添加一个 active 标记，把它初始化为 true 。
  // 当我们添加一个新的站点时，
  // 它把 active 标记设置为 false ， 
  // 然后通过一个快速的 setTimeout 函数迅速把它设置回 true 。
}
