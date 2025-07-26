import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveDataService } from 'src/app/database/save_data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: any;
  userName: any;
  telephone: any;
  profilePic: String = '';
isProcessing: boolean = false;

  constructor(private saveData: SaveDataService, private router: Router) { }

  ngOnInit(): void {

  }

  setProfilePic(newPic: string) {
    this.profilePic = newPic;
  }

  async uploadInfo() {
    this.isProcessing = true;
    const data = {
      name: this.name,
      username: this.userName,
      telephone: this.telephone,
      timestamp: new Date(),
      profilePic: this.profilePic,
      };
      try {
    await this.saveData.uploadData(data);
    this.router.navigate(['/']);
  } catch (error) {
    // Handle error if needed
    console.error('Error uploading data:', error);
  } finally {
    this.isProcessing = false;
  }
    this.isProcessing = false;
  }
}
