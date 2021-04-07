import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html"
})
export class UpdateComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("status") == "null") {
      this.router.navigateByUrl("/login");
    }
  }
}
