import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDrawer } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { TYPE_EGRESS, TYPE_INGRESS } from "@app/movements/services/movement-type.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  @Output() sidenavElementNative: EventEmitter<MatDrawer> =
    new EventEmitter<MatDrawer>();
  @ViewChild("sidenav")
  sidenavElement: MatDrawer | undefined;

  movementTypeIngress: string = TYPE_INGRESS
  movementTypeEgress: string = TYPE_EGRESS
  constructor(public router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    setTimeout(() => this.sidenavElementNative.emit(this.sidenavElement), 0); // after execution of syncronous
  }
  hide() {
    this.sidenavElement?.toggle();
  }
  handleRedirectionMovement(event: any, type: string) {
    console.log(event.currentTarget.dataset, event.target.dataset, event.target)
    this.router.navigateByUrl(
      `movements/${type?.toLowerCase().trim()}`
    );
    this.hide();
  }
}

