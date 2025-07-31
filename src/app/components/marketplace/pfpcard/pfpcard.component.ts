import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pfpcard',
  templateUrl: './pfpcard.component.html',
  styleUrls: ['./pfpcard.component.css']
})
export class PfpcardComponent implements OnInit {
profilePic: string = '';

  @Output() profilePicChange = new EventEmitter<string>();

  // Call this method whenever profilePic updates
  updateProfilePic(newPic: string) {
    this.profilePic = newPic;
    this.profilePicChange.emit(this.profilePic);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
