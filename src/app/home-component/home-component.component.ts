import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  title = "Home Page";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
  }

  getQuote() {
  }

  viewQuote() {
  }

  viewPolicy() {
  }
}
