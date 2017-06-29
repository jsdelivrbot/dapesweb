import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { UserRegisterModel } from './../../models/user.register.model';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.css']
})
export class NovoCadastroComponent implements OnInit {
  public user:UserRegisterModel;

  cadastroForm: FormGroup;
  nomeCompleto = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);
  error = '';
  loading = false;

  constructor(fb: FormBuilder,  private authenticationService: AuthenticationService, private router: Router) { 
    this.cadastroForm = fb.group({
        "nomeCompleto": this.nomeCompleto,
        "email": this.email,
        "passwords": fb.group({
          password: ['', Validators.required],
          repeat: ['', Validators.required]
        }, {validator: this.comparePassword})
    });
  }

  save(model: UserRegisterModel, isValid: boolean) {
    // call API to save customer
    this.loading = true;
        this.authenticationService.createUser(model.nome, model.email, model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    console.log(model, isValid);
  }

  comparePassword(group: FormGroup) {
    const pass = group.value;
    return (pass.password === pass.repeat) ? null /* It's good */ : {
      invalid: true
    }
  }

  onFormSubmit() {
    if (this.cadastroForm.valid) {
      // this.util.presentToast(" Favor aguardar...", "info");
      // this.saveNews(this.signupFormGroup.value);
      console.log("aqi2");
    } else {
      // this.util.presentToast("Favor preencher os campos obrigatórios.", "danger");
      console.log("aqi");
    }
  }

  get value(): string {
    return JSON.stringify(this.cadastroForm.value, null, 2);
  }

  ngOnInit() {
    this.user = {
      nome: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

}
