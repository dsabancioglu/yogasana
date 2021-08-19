import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit  {

  constructor(private router :Router) { }

  ngOnInit(){
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }


  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("Expdate");
    this.router.navigate(['/login']);
  }
}
