import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; // we need to read value "true" which is broadcasted by $authCheck which is observable and for that we need to import authservice and use "Subscribre"
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  // isLoggedIn : boolean = false;
authCheck: boolean;
  constructor( private _authService : AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._authService.$authCheck.subscribe((data)=>{
      // this.isLoggedIn = data;
      this.authCheck= data;
      console.log(this.authCheck);
      
    });
  }


logout(){
  this._authService.logout();
}
}
