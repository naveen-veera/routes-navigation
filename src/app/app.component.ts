import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loginStatus: string;
  userState: string;

  ngOnInit(): void {
    this.userState = localStorage.getItem("role");
    this.loginStatus = localStorage.getItem("status");
  }
  onLogout(): void {
    localStorage.setItem("role", "null");
    localStorage.setItem("status", "null");
    window.location.reload();
  }
}
