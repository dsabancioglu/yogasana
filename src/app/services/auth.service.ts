import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessToken } from '../models/accesToken';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.APIEndpoint + '/auth';

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) {
    let newPath = this.apiUrl + '/login';
    return this.httpClient.post<AccessToken>(newPath, loginModel);
  }

  register(registerModel: RegisterModel) {
    let newPath = this.apiUrl + '/register';
    return this.httpClient.post<AccessToken>(newPath, registerModel);
  }

  getAll () : Observable<any> {
    let newPath = this.apiUrl  + '/getall';
    return this.httpClient.get<any>(newPath);
  }

  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    }    
    return false;
  }

  logOut() {
    localStorage.removeItem("token");
  }
}
