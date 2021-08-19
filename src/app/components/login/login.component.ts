import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  registerForm : FormGroup;
  loginBox : Boolean = true;
  isLoaded : Boolean = false;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
              private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createRegisterForm();
  }


  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null,Validators.required]
    })
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.email]],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      password: [null,Validators.required],
      confirmPassword: [null, Validators.required]
    })
  }

  login() {
    if(this.loginForm.valid){
      this.isLoaded = true;
      let loginModel = Object.assign({},this.loginForm.value)
          this.authService.login(loginModel).subscribe(response => {
             localStorage.setItem('token',response.token.toString())
             localStorage.setItem('Expdate', response.date.toString())
             this.toastrService.success("Giriş Başarılı!" );
             this.isLoaded = false;
             this.router.navigate(['/']);
          } , err => {
            this.isLoaded = false;
            this.toastrService.error(err.error.message ? err.error.message : 'Sunucu bağlantısı başarısız!');
          })
           
    } else {
      this.isLoaded = false;
      this.toastrService.info("Giriş bilgilerinizi kontrol ediniz!");
    }
  }


  register() {
    this.isLoaded = true;
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value);
      this.authService.register(registerModel).subscribe(response => {
          localStorage.setItem('token',response.token.toString())
          localStorage.setItem('Expdate', response.date.toString())
          this.toastrService.success("Kayıt Başarılı!" );
          this.isLoaded = false;
          this.router.navigate(['/']);
      } , err => {
        this.isLoaded = false;
        this.toastrService.error(err.error.message ? err.error.message : 'Sunucu bağlantısı başarısız!');
      })
    } else {
      this.isLoaded = false;
      this.toastrService.warning("Giriş bilgilerinizi kontrol ediniz!")
    }
  }



  setLoginBox(){
    if(this.loginBox == true){
      this.loginBox = false;
      this.loginForm.reset();
    } else {
      this.loginBox = true;
      this.registerForm.reset();
    }
  }

}
