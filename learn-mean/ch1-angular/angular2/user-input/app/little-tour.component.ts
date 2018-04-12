import { Component } from '@angular/core';

@Component({
  selector: 'little-tour',
  template: `
    <input #newSite
      (keyup.enter)="addSite(newSite.value)"
      (blur)="addSite(newSite.value); newSite.value='' ">

    <button (click)=addSite(newSite.value)>Add</button>

    <ul><li *ngFor="let site of sites">{{site}}</li></ul>
  `
})
export class LittleTourComponent {
  sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
  addSite(newSite: string) {
    if (newSite) {
      this.sites.push(newSite);
    }
  }
}
