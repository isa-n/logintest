import { Component, OnInit } from '@angular/core';
import { SessionService } from '../utility/service/session.service';
import { StorageService } from '../utility/service/storage.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  public user: String;

  constructor(private session: SessionService,
    private storage: StorageService) { }

  ngOnInit() {
    this.storage.getUserName(this.session.getSignedUserId()).subscribe(res =>{
      this.user = res;
      console.log(this.user)
    },
    error => {
      console.log(error)
    })
  }

  

}
