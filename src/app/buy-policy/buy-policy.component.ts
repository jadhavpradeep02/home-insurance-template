import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../services/policy.service';

export class Policy {
  constructor(
    public startDate: string,
    public acknowledge: boolean
  ) { }
}

@Component({
  selector: 'app-buy-policy',
  templateUrl: './buy-policy.component.html',
  styleUrls: ['./buy-policy.component.scss']
})
export class BuyPolicyComponent implements OnInit {

  @Output() policydata = new EventEmitter<Policy>();
  title: string = "Buy Policy ESign";
  quoteId: any;
  policyForm!: FormGroup;
  policies: any;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private policyService: PolicyService) { }

  ngOnInit(): void {

  }

  onSubmit() {
  }

  buyPolicy() {
  }

  cancel() {
  }
}
