import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  email: String;
  password: String;
  async validar(){
    if(this.email == '123' && this.password=='123'){
         alert('Logeado')
         location.pathname= 'tabs/tab1'
    }else{
      alert('Usuario y/o contraseña incorrectos')
    }
  }

  ngOnInit() {
  }

}
