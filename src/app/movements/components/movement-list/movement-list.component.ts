import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MovementType } from "@app/movements/models/moovementListReponse";
import { EntityListResponse } from "@app/shared/pagination/meta.interface";

@Component({
  selector: "app-movement-list",
  templateUrl: "./movement-list.component.html",
  styleUrls: ["./movement-list.component.scss"],
})
export class MovementListComponent implements OnInit, OnChanges {
  // x: ThemePalette:
  @Input() movementList!: EntityListResponse<MovementType> | null;
  @Input() selectControl!: string;
  pageSizeOptions: number[] = [1, 20, 50, 100];
  length: number | undefined = 100;
  pageSize: number | undefined = 10;
  dataSource!: MatTableDataSource<MovementType>;
  displayedColumns: string[] = ['name', 'star'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.length = this.movementList?.meta.totalPages
    this.pageSize = this.movementList?.meta.itemsPerPage
    this.dataSource = new MatTableDataSource(this.movementList?.items || [])

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.movementList?.items || [])
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  onPaginatorChange($event: PageEvent) {
    console.log($event, "$event")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim()?.toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
