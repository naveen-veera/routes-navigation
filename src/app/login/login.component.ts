import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("status") == "true") {
      this.router.navigateByUrl("");
    }
  }
  listUser: any = [];
  user: any = [];

  userName: String;
  password: String;

  onLogin(): void {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://api.mocki.io/v1/50b6e912/users`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(res => {
          this.listUser = res;
          this.listUser.forEach(element => {
            if (
              element.name == this.userName &&
              element.password == this.password
            ) {
              localStorage.setItem("status", "true");
              localStorage.setItem("role", element.role);
              this.router.navigate(["/"]);
              window.location.reload();
            }
          });
          resolve("Success");
        });
    });
  }
}
