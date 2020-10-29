import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nameSearch: string = "";

  Products = [
    { sno: 1, name: "Mobile", price: "7000 RS", availability: "available" },
    {
      sno: 2,
      name: "Television",
      price: "16000 RS",
      availability: " Not available"
    },
    { sno: 3, name: "Laptop", price: "40000 RS", availability: "available" },
    {
      sno: 4,
      name: "Washing Machine",
      price: "17000 RS",
      availability: "Not available"
    },
    {
      sno: 5,
      name: "Mobile (Samsung)",
      price: "7000 RS",
      availability: "available"
    },
    {
      sno: 6,
      name: "Television(Sansui)",
      price: "24000 RS",
      availability: "available"
    },
    {
      sno: 7,
      name: "Laptop (HP)",
      price: "54000 RS",
      availability: " Not available"
    },
    {
      sno: 8,
      name: "Mobile(Nokia)",
      price: "10000 RS",
      availability: "Not available"
    }
  ];
}
