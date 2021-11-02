import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PolicyService } from '../services/policy.service';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.scss']
})
export class ViewPolicyComponent implements OnInit {

  title: string = "Policy Details";
  user_id: any;
  usersList: any = [];
  usersListBkp: any = [];
  policyData: any = [];
  policyDataBkp: any = [];
  quotesData: any = [];
  quotesDataBkp: any = [];
  show_details: boolean = false;

  constructor(private router: Router, private userService: UserService, private policyService: PolicyService, private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  cancel() {
  }

  usernameSelection(event) {
  }

  getPolicyDataforUser() {    
  }
}
