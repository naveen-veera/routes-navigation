import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html"
})
export class AddComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem("status") == "null") {
      this.router.navigateByUrl("/login");
    }
  }
}
