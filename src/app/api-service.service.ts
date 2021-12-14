import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  url: string = "https://localhost:44398";

  constructor(private http: HttpClient) {}

  //customer related
  getAllCustomers() {
    return this.http.get(this.url + "/customers");
  }

  addCustomer(data: any) {
    return this.http.post(this.url + "/customers", data);
  }

  udateCustomer(data: any) {
    return this.http.put(this.url + "/customers", data);
  }

  deleteCustomer(data: any) {
    return this.http.delete(this.url + "/Customers?id=" + data.id);
  }

  //suppliers related
  getAllSuppliers() {
    return this.http.get(this.url + "/suppliers");
  }

  addSupplier(data: any) {
    return this.http.post(this.url + "/suppliers", data);
  }

  udateSupplier(data: any) {
    return this.http.put(this.url + "/suppliers", data);
  }

  deleteSupplier(data: any) {
    return this.http.delete(this.url + "/suppliers?id=" + data.id);
  }
}
