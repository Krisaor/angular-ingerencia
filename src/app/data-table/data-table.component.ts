import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatTable) table: MatTable<DataTableItem>;
  dataSource = new DataTableDataSource(this.userService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'author', 'created_at'];

  /*ngOnInit() {
    this.dataSource = new DataSource(this.userService);
  }*/
  ngOnInit() {
  }

  constructor(private userService: UserService) { };

  /*ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
  }*/
}

export class DataTableDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<any> {
    return this.userService.getUsers();
  }

  disconnect() {}
}
