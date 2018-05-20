import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router  } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchIsActive: boolean = false;
  currentUrl: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _location: Location
            ) { }

  ngOnInit() {
    this.router.events.filter((event: any) => event instanceof NavigationEnd)
        .subscribe(event => {
            this.currentUrl = event;
            if (this.currentUrl.url == '/search') {
              this.searchIsActive = true;
            } else {
              this.searchIsActive = false;
            }
        });
  }

  searchClickGoBack() {
    this._location.back();
  }

}
