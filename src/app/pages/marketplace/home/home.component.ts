import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth/core/auth.guard';
import { AuthService } from 'src/app/auth/core/auth.service';
import { ReadDataService } from 'src/app/database/read_data.service';

    interface Item {
      id: string;
      header: string;
      subtext: string;
      imageUrl: string;
      date: string;
    }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [
  "All",
  "Home & Garden",
  "Entertainment",
  "Clothing & Accessories",
  "Collectibles, Antiques & Jewelry",
  "Real Estate & Property",
  "Family",
  "Electronics",
  "Hobbies",
  "Classified",
  "Others"
];
userName: any;
visibleItems: any;
hiddenItems: any;
showDropdown: any;

  constructor(private auth: AuthGuard, private readData: ReadDataService) { }
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

}
