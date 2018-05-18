import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { DonationComponent } from './donation/donation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

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
    SearchComponent,
    DonationComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
