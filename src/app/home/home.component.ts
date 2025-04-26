import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit, OnDestroy {

    selectedTab: number = 0;

  constructor(
      private router: RouterExtensions,
      private active: ActivatedRoute
    ) { }

  ngOnInit(): void {
      this.router.navigate(
        [
            {
                outlets: {daily: ["daily"], monthly: ["monthly"]}
            }
        ],
        {
            relativeTo: this.active
        }
      );

      if (this.active.snapshot.queryParams["target"])
          this.selectedTab = this.active.snapshot.queryParams["target"];
      else this.selectedTab = 0;
      //else this.selectedTab = 1;
  }

  loadView(target: String){

  }

  ngOnDestroy(){

  }

}
