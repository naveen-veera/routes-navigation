import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html"
})
export class ViewComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("status") == "null") {
      this.router.navigateByUrl("/login");
    }
  }
}
