import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
 



import{PixbayservicesService} from './service/pixbayservices.service';
import { RoundPipe } from './pipe/round.pipe';
import { TestsComponent } from './components/tests/tests.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { TrendingComponent } from './components/trending/trending.component';
import { AboutComponent } from './components/about/about.component';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RoundPipe,
    TestsComponent,
    LoginComponent,
    HomeComponent,
    CollectionsComponent,
    TrendingComponent,
    AboutComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2Webstorage
  ],
  bootstrap: [AppComponent],
  providers:[PixbayservicesService]

})

export class AppModule { 

  
}
