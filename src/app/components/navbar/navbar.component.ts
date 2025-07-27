import { faArrowUpFromBracket } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/index.d';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon/icon';
import { AuthGuard } from 'src/app/auth/core/auth.guard';
import { ReadDataService } from 'src/app/database/read_data.service';
import { AuthService } from 'src/app/auth/core/auth.service';

    interface Item {
      id: string;
      header: string;
      subtext: string;
      imageUrl: string;
      date: string;
    }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
userName: any;
visibleItems: any;
hiddenItems: any;
showDropdown: any;

  constructor(private authservice: AuthService, private auth: AuthGuard, private readData: ReadDataService, private router: Router) { }
  items: Item[] = [];
  profilePic: string = '';
  username: String = 'Guest';


  async ngOnInit(): Promise<void> {
    console.log(this.auth);
    try {
      const data = await this.readData.readData().then(data => {
        this.items = data as Item[];
      })
    } catch (e) {
      console.log("Error happened:", e)
    }
    try {
      const userdata = await this.readData.readUserData().then(data => {
        this.username = data?.name;
        this.profilePic = data?.profilePic;
        console.log(this.profilePic)
      })
    } catch (e) {
      console.log('error happened', e);
    }
  }
  async logout() {
    await this.authservice.logout().then(
      () => {
        this.router.navigate(['/login'])
      }
    );
  }
}
