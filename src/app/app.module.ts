import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HelloComponent, FilterPipe, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
