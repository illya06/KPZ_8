import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerManagerComponent } from "./customer-manager/customer-manager.component";
import { SupplierManagerComponent } from "./supplier-manager/supplier-manager.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CustomerItemComponent } from "./customer-manager/customer-item.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    SupplierManagerComponent,
    NavComponent,
    CustomerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
