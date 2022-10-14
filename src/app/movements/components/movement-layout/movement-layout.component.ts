import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-movement-layout",
  templateUrl: "./movement-layout.component.html",
  styleUrls: ["./movement-layout.component.scss"],
})
export class MovementLayoutComponent implements OnInit {
  selectedIndex!: number;
  constructor(router: Router) {
    router.events.forEach((event) => {
      this.verifyIndex();
    });
  }

  ngOnInit(): void {
    this.verifyIndex();
  }
  verifyIndex() {
    this.selectedIndex = window.location.hash.includes("#egresos") ? 1 : 0;
  }
}
