import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { UpdateComponent } from "./update/update.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "view", component: ViewComponent },
      { path: "add", component: AddComponent },
      { path: "update", component: UpdateComponent },
      { path: "**", redirectTo: "login" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
