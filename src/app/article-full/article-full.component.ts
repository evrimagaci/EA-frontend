import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './../header/header.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { ArticleMainComponent } from './../article-main/article-main.component';

import { DataService } from './../core/data.service';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.scss']
})
export class ArticleFullComponent implements OnInit {
  currentArticleId: number;
  articles;
  currentArticle;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.currentArticleId = +this.route.snapshot.paramMap.get('id');
    this.articles = this.dataService.getArticlesData()
    this.currentArticle = this.articles.find(item => item.id === this.currentArticleId);
  }

} 
