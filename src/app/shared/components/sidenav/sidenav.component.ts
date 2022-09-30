import { MediaMatcher } from "@angular/cdk/layout";
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { MatDrawer, MatDrawerToggleResult } from "@angular/material/sidenav";

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

  ngOnInit(): void {
    setTimeout(() => this.sidenavElementNative.emit(this.sidenavElement), 0); // after execution of syncronous
  }
  hide() {
    this.sidenavElement?.toggle();
  }
}
