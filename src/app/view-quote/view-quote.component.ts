import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.scss']
})
export class ViewQuoteComponent implements OnInit {

  quotesData: any = [];
  title: string = "Quote Details";
  usersList: any = [];
  show_details: boolean = false;
  user_id: any;
  backupData: any = [];

  constructor(private quoteService: QuoteService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  usernameSelection(event) {
  }

  getQuoteDataforUser() {
  }

  buyPolicy(id) {
  }
}
