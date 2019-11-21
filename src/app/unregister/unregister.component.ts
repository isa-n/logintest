import { Component, OnInit } from '@angular/core';
import { StorageService } from '../utility/service/storage.service';
import { Router } from '@angular/router';
import { SessionService } from '../utility/service/session.service';

@Component({
  selector: 'app-unregister',
  templateUrl: './unregister.component.html',
  styleUrls: ['./unregister.component.css']
})
export class UnregisterComponent implements OnInit {

  public input: string;

  constructor(private router: Router,
    private storage: StorageService,
    private session: SessionService) { }

  ngOnInit() {
  }

  submitData(){
    this.storage.deleteUser({id: this.session.getSignedUserId(), pass: this.input}).subscribe(res =>{
      if(res){
        this.session.signOut();
        this.router.navigate([""]);
      }
    })
  }

}
