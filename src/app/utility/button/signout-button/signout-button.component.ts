import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout-button',
  templateUrl: './signout-button.component.html',
  styleUrls: ['./signout-button.component.css']
})
export class SignoutButtonComponent implements OnInit {

  constructor(private service :SessionService, private router: Router) { }

  ngOnInit() {
    
  }

  signOut(){
    this.service.signOut();
    this.router.navigate(['']);
  }

}
