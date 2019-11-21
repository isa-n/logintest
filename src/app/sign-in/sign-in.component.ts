import { Component, OnInit } from '@angular/core';
import { SessionService } from '../utility/service/session.service';
import { Router } from '@angular/router';
import { UserCredential } from '../datatype/userdata';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public user : UserCredential= {
    id:"",
    pass:""
  }
  public viewMessage = false;

  constructor(private service:SessionService,
    private router:Router) { }

  ngOnInit() {
  }

  signin(){
    this.service.signIn(this.user).then((result)=> {
      if(result){
        this.viewMessage = false;
        this.router.navigate(["my-page"]);
      }
      else {
        this.viewMessage = true;
      }
    })

  }

}
