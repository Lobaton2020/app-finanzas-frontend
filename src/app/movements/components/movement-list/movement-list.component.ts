import {
  Component,
  OnInit,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MovementType } from "@app/movements/models/moovementListReponse";
import {
  TYPE_EGRESS,
  TYPE_INGRESS,
} from "@app/movements/services/movement-type.service";
import {
  loadMovementEgress,
  loadMovementIngress,
} from "@app/movements/state/movement.action";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";
import { AppState } from "@app/shared/store/app.state";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-movement-list",
  templateUrl: "./movement-list.component.html",
  styleUrls: ["./movement-list.component.scss"],
})
export class MovementListComponent implements OnInit, OnChanges, AfterViewInit  {
  // x: ThemePalette:
  @Input() movementList!: EntityListResponse<MovementType> | null;
  @Input() selectControl!: string;
  pageSizeOptions: number[] = [4];
  length: number | undefined = 100;
  pageSize: number | undefined = 10;
  dataSource!: MatTableDataSource<MovementType>;
  displayedColumns: string[] = ["name", "star"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.length = this.movementList?.meta.totalPages;
    this.pageSize = this.movementList?.meta.itemsPerPage;
    // this.dataSource = new MatTableDataSource(this.movementList?.items || [])
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<MovementType>(
      this.movementList?.items || []
    );
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onPaginatorChange($event: PageEvent) {
    console.log("******+", $event);
    if (this.selectControl.toLowerCase().includes(TYPE_EGRESS.toLowerCase())) {
      return this.store.dispatch(
        loadMovementEgress({
          selectControl: TYPE_EGRESS,
          page: $event.pageIndex,
          limit: $event.pageSize,
        })
      );
    }
    return this.store.dispatch(
      loadMovementIngress({
        selectControl: TYPE_INGRESS,
        page: $event.pageIndex,
        limit: $event.pageSize,
      })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim()?.toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
