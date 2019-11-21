import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { UserCredential, UserData } from '../../datatype/userdata';

import jsondata from '../../../assets/UserData.json' ;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  //subscribeで取ってきたデータをreturnで返す
  private prepared: Subject<any> = new Subject();
 
  createUser(user: UserData){
    this.getJSON().subscribe(res =>{
      res.push(user);
      console.log(res);
    });
  }

  deleteUser(user: UserCredential) :Observable<boolean>{
    
    this.getJSON().subscribe(res =>{
      const index = res.findIndex(data => user.id === data.id);
      let result: boolean;
      if(index === -1 || user.pass !== res[index].pass) result = false;
      else {
        res.splice(index,1);
        result = true;
      }
      this.prepared.next(result);
    });
    return this.prepared;
  }

  authUser(user: UserCredential): Observable<boolean>{
    return of(jsondata.find(data => user.id === data.id).pass === user.pass);

    // this.getJSON().subscribe(res =>{
    //   const index = res.findIndex(data => user.id === data.id);
    //   let result: boolean;

    //   if(index === -1) result = false;
    //   else result = user.pass === res[index].pass;

    //   this.prepared.next(result);
    // });
    // return this.prepared;
  }

  getUserName(id:string): Observable<string>{
    return of(jsondata.find(data => id === data.id).userName);

    // this.getJSON().subscribe(res =>{
    //   const index = res.findIndex(data => id === data.id);
    //   this.prepared.next(res[index].userName);
    // });
    // console.log(this.prepared , typeof this.prepared);
    // return this.prepared;
  }

  existUserId(id:string): Observable<boolean>{
    return of(jsondata.findIndex(data => id === data.id) !== -1);

    // this.getJSON().subscribe(res =>{
    //   const index = res.findIndex(data => id === data.id);
    //   this.prepared.next(index !== -1 ? true : false);
    // });
    // return this.prepared;
  }

  getUserIndex(id:string): Observable<number>{
    return of(jsondata.findIndex(data => id === data.id));

    // this.getJSON().subscribe(res =>{
    //   const index = res.findIndex(data => id === data.id);
    //   this.prepared.next(index);
    // });
    // return this.prepared;
  }

  //サーバーからhttp通信で取ってくる風に
  getJSON(): Observable<any>{
    return of(jsondata)
    //return this.http.get("");
  }

}
