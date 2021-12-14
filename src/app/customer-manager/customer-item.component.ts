import { Component, Input } from "@angular/core";

@Component({
  selector: "app-customer-item",
  templateUrl: "./customer-item.component.html",
  styleUrls: ["./customer-manager.component.css"],
})
export class CustomerItemComponent {
  @Input() id!: number
  @Input() name!: string
  @Input() email!: string
}
