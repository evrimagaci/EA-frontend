import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'home', component: AppComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { })],
    exports: [RouterModule]
})

export class AppRoutingModule {}