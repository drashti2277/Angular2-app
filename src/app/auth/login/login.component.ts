import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

authForm : any = {}; 
  constructor( private _authService : AuthService) { }

  ngOnInit() {
  }
  login(){
    //from here I want to call login within the service
    //import it here
    //create its instance using constructor
    this._authService.login(this.authForm);
    
  }

}
