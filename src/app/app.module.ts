import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleMainComponent } from './article-main/article-main.component';
import { ArticleFullComponent } from './article-full/article-full.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ArticleMainComponent,
    ArticleFullComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'article', component: ArticleFullComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
