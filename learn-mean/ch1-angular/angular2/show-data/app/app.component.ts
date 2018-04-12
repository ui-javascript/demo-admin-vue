import { Component } from '@angular/core';
import { Site } from './site';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>我喜欢的网站: {{mySite.name}}</h2>
    <p>网站列表:</p>
    <ul>
      <li *ngFor="let site of sites">
       {{ site.name }}
      </li>
    </ul>
    <p *ngIf="sites.length > 3">你有很多个喜欢的网站!</p>
    `
})

export class AppComponent {
  title = '站点列表';
  sites = [
      new Site(1, '菜鸟教程'),
      new Site(2, 'Google'),
      new Site(3, 'Taobao'),
      new Site(4, 'Facebook')
      ];
  mySite = this.sites[0];
}
