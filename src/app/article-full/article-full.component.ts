import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../header/header.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { ArticleMainComponent } from './../article-main/article-main.component';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.scss']
})
export class ArticleFullComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
