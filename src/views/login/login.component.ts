import { UserLoginModel } from './../../models/user.login.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserLoginModel;

  loading = false;
  error = '';
  imageurl = 'https://s3-us-west-2.amazonaws.com/dapesweb/dapes_verde.jpg';
  
  constructor(private router: Router,
        private authenticationService: AuthenticationService) { }

  doLogin(model: UserLoginModel, isValid: boolean){
    this.loading = true;
        this.authenticationService.login(model.username, model.password)
            .subscribe(result => {
                console.log("result = "+ result);
                if (result === true) {
                    console.log("ttt");
                    this.router.navigate(['/cadastro']);
                } else {
                    console.log("eee");
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
  }

doLimpar(){
    this.user =  {
        username: '',
        password: ''
    };
}
  navegarCadastro() {
        this.router.navigateByUrl('/novo-cadastro');
    };

  ngOnInit() {
      this.user = {
        username: '',
        password: ''
    };
  }

}
