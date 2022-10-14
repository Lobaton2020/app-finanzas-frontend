import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movement-list",
  templateUrl: "./movement-list.component.html",
  styleUrls: ["./movement-list.component.scss"],
})
export class MovementListComponent implements OnInit {
  @Input() movementList:any = [];
  constructor() {}

  ngOnInit(): void {}
}
