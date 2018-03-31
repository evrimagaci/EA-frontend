import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleMainComponent } from './article-main/article-main.component';
import { ArticleFullComponent } from './article-full/article-full.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TagNavComponent } from './tag-nav/tag-nav.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ArticleMainComponent,
    ArticleFullComponent,
    FooterComponent,
    ContactComponent,
    TagNavComponent,
    SignFormComponent,
    UserComponent,
    SearchComponent
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
