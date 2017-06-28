import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.css']
})
export class NovoCadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  nomeCompleto = new FormControl("", Validators.required);
  email = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) { 
    this.cadastroForm = fb.group({
        "nomeCompleto": this.nomeCompleto,
        "email": this.email,
        "passwords": fb.group({
          password: ['', Validators.required],
          repeat: ['', Validators.required]
        }, {validator: this.comparePassword})
    });
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
  }

}
