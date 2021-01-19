import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  @Input() tabTitle: string;
  
  constructor(tabs:TabsComponent) {
    tabs.addTab(this);
  }

  active: boolean = false;
  

}
