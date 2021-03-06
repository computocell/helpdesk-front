import { HttpClientModule } from "@angular/common/http";
import { SharedService } from "./services/shared.service";
import { UserService } from "./services/user.service";
import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/security/login/login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, routes],
  providers: [UserService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
