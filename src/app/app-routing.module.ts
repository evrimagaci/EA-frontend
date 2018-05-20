import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleFullComponent } from './article-full/article-full.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'sign', component: SignFormComponent },
    { path: 'article/:id/:articleName', component: ArticleFullComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'search', component: SearchComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}