import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { post } from "selenium-webdriver/http";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];

  constructor(public dataService: DataService) {
    console.log("Construtor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");

    this.name = "John Doe";
    this.age = 23;

    this.address = {
      street: "50 Main st",
      city: "Boston",
      state: "MA"
    };
    this.hobbies = ["Write Code", "Watch Movies", "Listen to music"];
    this.hello = 10;

    this.dataService.getPosts().subscribe(posts => {
      //this.posts = post;
      console.log(posts);
    });
  }

  onClick() {
    this.name = "Elias";
    this.hobbies.push("New Hobby");
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}
interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userid: number;
}
