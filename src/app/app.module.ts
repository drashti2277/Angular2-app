import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //inorder to include two way data binding we need to import one whole module in angular 2.
import { RouterModule, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { DetailComponent } from './products/detail/detail.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { AuthService } from './auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { GuardGuard } from './auth/guard.guard'; 



// This part is to inculde any meta data of your application. Any module you create has to be updated here.
@NgModule({
  //declarations are used for providing all components
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    WelcomeComponent,
    DetailComponent,
    LoginComponent,
    NavigationComponent
   
  ],
  //imports are used for providing all modules
  imports: [
    BrowserModule,
    FormsModule,
    //forRoot or forChild
    RouterModule.forRoot([
      //each route config objects has two mandate parameters path and component
      { path: "home", component: WelcomeComponent },
      { path: "products", component: ProductsComponent , canActivate: [GuardGuard] },
      { path: "login", component: LoginComponent },
      { path: "products/:id", component: DetailComponent, canActivate: [GuardGuard]},
      {path: "", redirectTo: "home", pathMatch :"full"},
      {path: "**", redirectTo:"home"}
                  ])
 
  ],
  //providers are for the service
  providers: [AuthService, CookieService, GuardGuard],// AuthGuard == GuardGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
