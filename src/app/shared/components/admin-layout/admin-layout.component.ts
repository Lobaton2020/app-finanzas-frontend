import { Component, OnInit } from "@angular/core";
import { MatDrawer, MatDrawerToggleResult } from "@angular/material/sidenav";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent {
  public sidenav!: MatDrawer;
  constructor() {}
  ngOnInit(): void {}
  loadSidenavElement(item: MatDrawer) {
    this.sidenav = item;
  }
}
