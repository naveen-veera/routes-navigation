import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  role: string;
  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    if (localStorage.getItem("status") == "null") {
      this.router.navigateByUrl("/login");
    }
  }
}
