import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  createdAt : any;

  constructor() { }

  ngOnInit(): void {
    this.createdAt = localStorage.getItem("Expdate")
  }

}
