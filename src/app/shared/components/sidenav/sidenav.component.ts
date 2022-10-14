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
  constructor(public router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    setTimeout(() => this.sidenavElementNative.emit(this.sidenavElement), 0); // after execution of syncronous
  }
  hide() {
    this.sidenavElement?.toggle();
  }
  handleRedirectionMovement(event: any) {
    this.router.navigateByUrl(
      `movements#${event.target.textContent?.toLowerCase().trim()}`
    );
    this.hide();
  }
}

