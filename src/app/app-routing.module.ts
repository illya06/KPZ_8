import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerManagerComponent } from "./customer-manager/customer-manager.component";
import { SupplierManagerComponent } from "./supplier-manager/supplier-manager.component";

const routes: Routes = [
  {
    path: "customers",
    component: CustomerManagerComponent,
  },
  {
    path: "suppliers",
    component: SupplierManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
