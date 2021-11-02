import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { QuoteDetailsService } from '../services/quoteDetails.service';

export class Location {
  constructor(
    public residenceType: string,
    public address: string,
    public residenceUse: string
  ) { }
}

export class Property {
  constructor(
    public marketValue: string,
    public homeYear: string,
    public squareFootage: string,
    public dwellingType: string,
    public roofMaterial: string,
    public garageType: string,
    public noOfBaths: string,
    public noHalfBaths: string,
    public swimmingPool: string,
  ) { }
}

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {

  @Output() locationDate = new EventEmitter<Location>();
  @Output() propertyData = new EventEmitter<Property>();
  title: string = "Get Quote";
  locationForm!: FormGroup;
  //homeownerForm!: FormGroup;
  propertyForm!: FormGroup;
  location_step = false;
  //homeowner_step = false;
  property_step = false;
  step = 1;
  usersList : any = [];
  quotedetailsList : any = [];
  selected_user_id: number;
  username_msg: boolean = false;
  residence_types: any = ['Single-Family Home', 'Condo', 'Townhouse', 'Rowhouse', 'Duplex', 'Apartment'];
  residence_use: any = ["Primary", "Secondary", "Rental Property"];
  dwellig_style: any = ["1 story", "1.5 story", "2 story", "2.5 story", "3 story"];
  roof_material: any = ["Concrete", "Clay", "Rubber", "Steel", "Tin", "Wood"];
  garage_types: any = ["Attached", "Detached", "Basement", "Built-in", "None"];
  bath_numbers: any = ["1", "2", "3", "more"];

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private quoteDetailsService: QuoteDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  cancel() {
  }

  next(){
  }

  previous(){
  }

  usernameSelection(event) {
  }

  getQuote(){
  }
}
