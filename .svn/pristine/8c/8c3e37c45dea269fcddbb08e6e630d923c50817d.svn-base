import { UserLoginModel } from './../../models/user.login.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  doLogin(user: UserLoginModel, isValid: boolean){
    console.log("chegou");
    this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
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
