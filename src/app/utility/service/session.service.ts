import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { UserCredential } from 'src/app/datatype/userdata';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private signedIn = false;
  private signedUserId: string;

  constructor(private service: StorageService) { }

  signIn(data :UserCredential) : Promise<boolean>{
    return new Promise((resolve) => {
      this.service.authUser(data).subscribe(res =>{
        if(res){
          this.signedIn = true;
          this.signedUserId = data.id;
        }
        resolve(res);
      })
    });
  }

  signOut(){
    this.signedIn = false;
    this.signedUserId = null;
  }

  isSignedIn(){
    return this.signedIn;
  }

  getSignedUserId(){
    return this.signedUserId;
  }
}
