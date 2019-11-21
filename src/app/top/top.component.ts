import { Component, OnInit } from '@angular/core';
import { SessionService } from '../utility/service/session.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public isSinedIn = false;

  constructor(private service:SessionService) { }

  ngOnInit() {
    this.isSinedIn = this.service.isSignedIn();
  }

}
