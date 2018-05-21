import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from './../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  articles: Array<object>;

  constructor(private dataService: DataService, private titleService: Title) { }

  ngOnInit() {
    this.articles = this.dataService.getArticlesData();
    this.titleService.setTitle('Evrim Ağacı - Anasayfa');
  }
  

}
