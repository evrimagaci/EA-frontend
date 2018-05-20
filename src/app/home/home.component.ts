import { Component, OnInit } from '@angular/core';
import { DataService } from './../core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  articles: Array<object>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.articles = this.dataService.getArticlesData();
  }
  

}
