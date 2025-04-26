import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'ns-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.css']
})
export class SideDrawerComponent implements OnInit {

  constructor(private ui: UiService) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.ui.toggleDrawer();
  }

}
