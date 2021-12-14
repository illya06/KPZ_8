import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiServiceService } from "../api-service.service";

@Component({
  selector: "app-customer-manager",
  templateUrl: "./customer-manager.component.html",
  styleUrls: ["./customer-manager.component.css"],
})
export class CustomerManagerComponent implements OnInit {
  _customers?: any;
  get customers() {
    return this._customers;
  }

  set customers(val) {
    this._customers = val;
  }

  form: FormGroup = new FormGroup({
    customerId: new FormControl("", [Validators.nullValidator]),
    customerName: new FormControl("", [
      Validators.required,
      Validators.nullValidator,
    ]),
    customerPhone: new FormControl("", [Validators.nullValidator]),
    customerEmail: new FormControl(null, [Validators.email]),
    customerAddress: new FormControl("", [Validators.nullValidator]),
    firstPurchaseDate: new FormControl(null, [Validators.nullValidator]),
  });

  deleteForm: FormGroup = new FormGroup({
    id: new FormControl(null, [
      Validators.required,
      Validators.nullValidator,
      Validators.min(0),
    ]),
  });

  constructor(private _apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getAll();
  }

  onSubmit() {
    let data = { ...this.form.value };
    delete data.customerId;

    this._apiService.addCustomer(data).subscribe(
      (res) => {
        alert("request succsseded");
        console.log(res);
      },
      (err) => {
        alert("request failed");
        console.log(err);
      }
    );

    this.getAll();
  }

  onEdit() {
    this._apiService.udateCustomer(this.form.value).subscribe(
      (res) => {
        alert("request succsseded");
        console.log(res);
      },
      (err) => {
        alert("request failed");
        console.log(err);
      }
    );

    this.getAll();
  }

  onDelete() {
    this._apiService.deleteCustomer(this.deleteForm.value).subscribe(
      (res) => {
        alert("delete succsseded");
        console.log(res);
      },
      (err) => {
        alert("delete failed");
        console.log(err);
      }
    );

    this.getAll();
  }

  getAll() {
    this._apiService.getAllCustomers().subscribe(
      (res) => {
        this.customers = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
