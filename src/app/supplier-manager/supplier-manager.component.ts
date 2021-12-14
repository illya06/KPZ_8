import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-supplier-manager',
  templateUrl: './supplier-manager.component.html',
  styleUrls: ['./supplier-manager.component.css']
})
export class SupplierManagerComponent implements OnInit {
  _suppliers?: any;
  get suppliers() {
    return this._suppliers;
  }

  set suppliers(val) {
    this._suppliers = val;
  }

  form: FormGroup = new FormGroup({
    supplierId: new FormControl("", [Validators.nullValidator]),
    supplierAddress: new FormControl("", [Validators.nullValidator]),
    supplierName: new FormControl("", [
      Validators.required,
      Validators.nullValidator,
    ]),
    supplierPhone: new FormControl("", [Validators.nullValidator]),
    supplierEmail: new FormControl(null, [Validators.email]),
    contactName: new FormControl(null, [Validators.nullValidator]),
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
    delete data.supplierId;

    this._apiService.addSupplier(data).subscribe(
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
    this._apiService.udateSupplier(this.form.value).subscribe(
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
    this._apiService.deleteSupplier(this.deleteForm.value).subscribe(
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
    this._apiService.getAllSuppliers().subscribe(
      (res) => {
        this.suppliers = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
