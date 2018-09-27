import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { TrendingComponent } from './components/trending/trending.component';
import { AboutComponent } from './components/about/about.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'APP', component: AppComponent },
  { path: 'Collections', component: CollectionsComponent },
  { path: 'Trending', component: TrendingComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Body', component: BodyComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Logout', component: LogoutComponent },
  { path: 'Home', component: HomeComponent ,
        children: [                          //<---- child components declared here
                  {
                      path:'Collections',
                      component: CollectionsComponent
                  },
                  {
                    path:'Trending',
                    component: TrendingComponent
                  },
                  {
                    path:'About',
                    component: AboutComponent
                  }]


},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
