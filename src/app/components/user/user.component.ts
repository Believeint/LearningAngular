import { Component, OnInit } from "@angular/core";

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

  constructor() {
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
