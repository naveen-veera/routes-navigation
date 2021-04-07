import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { UpdateComponent } from "./update/update.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    UpdateComponent,
    ViewComponent,
    AddComponent,
    LoginComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
