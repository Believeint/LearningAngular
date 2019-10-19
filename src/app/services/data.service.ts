import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(public http: HttpClient) {
    console.log("Hello from Data Service...");
  }

  getPosts() {
    return this.http
      .get("http://jsonplaceholder.typicode.com/posts")
      .pipe(map((res: Response) => res.json()));
  }
}
