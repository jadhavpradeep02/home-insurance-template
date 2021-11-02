import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

export class User {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public dob: string
  ) { }
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  @Output() userdata = new EventEmitter<User>();
  usersData: any;
  userForm!: FormGroup;
  title = "User Registration";

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  cancel() {
  }

  onSubmit() {
  }

  addUser(){
  }
}
