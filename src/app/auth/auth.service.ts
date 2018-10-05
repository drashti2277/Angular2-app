import { Injectable } from '@angular/core';
import { Router } from '@angular/router';// inorder to use navigate we need to import router and create its instance using constructor
import { Subject, BehaviorSubject } from 'rxjs';//in order to use observable you need to import subject
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
// after importing subject create varible 
  $authCheck = new BehaviorSubject<any>(this.check());
  constructor(private _router:Router, private _cookieService: CookieService) { }
  
  
  login(credentials){
    if(credentials.username == "admin" && credentials.password == "admin" ){ //in angularjs we use to do $location.path but here we need to import route and use .navigate function.
      //just here we enter code to toggle navigation link. for this we need to import subject from rxjs file.
      alert('success');
      this.$authCheck.next(true); //when you want to emmit this you want the value "true" to go.
      this._cookieService.set('isLoggedIn', 'true');
      this.isLoggedIn = true;
      this._router.navigate(['/products']);
    }else {
      alert("wrong credentials");
    }
 }
 
  logout(){
    this.$authCheck.next(false);
    this._cookieService.delete('isLoggedIn');
    this.isLoggedIn = false;
    this._router.navigate(['/home']);      
  }
  check(){
    if(this._cookieService.check('isLoggedIn')){
      return true;
    }
    else{
      return false;   }
  }

}