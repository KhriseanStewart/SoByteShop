import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testerpage',
  templateUrl: './testerpage.component.html',
  styleUrls: ['./testerpage.component.css']
})
export class TesterpageComponent implements OnInit {
username: any;
profilePic: any;

  constructor() { }

  ngOnInit(): void {
  }

}
