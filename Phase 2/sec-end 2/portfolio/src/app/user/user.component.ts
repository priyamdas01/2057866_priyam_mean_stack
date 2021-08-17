import { Contact } from './../contactDetails';
import { UserProfile } from './../userprofile';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loginInfo = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  signupInfo = new FormGroup({
    signFirstName: new FormControl(),
    signLastName: new FormControl(),
    signUsername: new FormControl(),
    signPassword: new FormControl(),
  });
  contactDetails = new FormGroup({
    contact: new FormControl(),
    phone: new FormControl(),
  });
  contacts:Contact[] = [];
  users:Array<UserProfile> = new Array();


  loginFlag:boolean = true;
  signupFlag:boolean = false;
  portfolioFlag:boolean = false;
  msg:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  loginUser(){
    if(this.users.length === 0){
      this.msg = "please try again";
    }
    console.log(this.users);
    for(var i = 0; i<this.users.length; i++){
      if((this.users[i].userName === this.loginInfo.value.username) && (this.users[i].pass === this.loginInfo.value.password)){
        this.portfolioFlag = true;
        this.signupFlag = false;
        this.loginFlag = false;
        break;
      }else{
          this.msg = "please try again";
          this.portfolioFlag = false;
          this.signupFlag = false;
          this.loginFlag = true;
      }
    }

    // this.users.forEach((obj) => {
    //   if((obj.userName === this.loginInfo.value.username) && (obj.pass === this.loginInfo.value.password)){
    //     this.msg = "successfully logged in";
    //     this.portfolioFlag = true;
    //     this.signupFlag = false;
    //     this.loginFlag = false;
    //   }else{
    //     this.msg = "please try again";
    //     this.portfolioFlag = false;
    //     this.signupFlag = false;
    //     this.loginFlag = true;
    //   }
    // });

    }
    signUp(){
      this.signupFlag = true;
      this.loginFlag = false;
      let member:UserProfile = new UserProfile(this.signupInfo.value.signFirstName, this.signupInfo.value.signLastName,this.signupInfo.value.signUsername,this.signupInfo.value.signPassword);
      this.users.push(member);
      this.signupInfo.reset();
    }
    login(){
      this.signupFlag = false;
      this.loginFlag = true;
      this.msg = "";
      this.loginInfo.reset();

    }
    showContact(){
      let person = new Contact(this.contactDetails.value.contact, this.contactDetails.value.phone);
      this.contacts.push(person);
    }
  }


