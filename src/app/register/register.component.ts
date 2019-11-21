import { Component, OnInit } from '@angular/core';
import { StorageService } from '../utility/service/storage.service';
import { UserData } from '../datatype/userdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public input : UserData = new UserData();

  constructor(private service: StorageService,
    private router:Router) { }

  ngOnInit() {
  }

  submitData(){
    this.service.createUser(this.input);
    this.router.navigate(["signin"]);
  }
}
