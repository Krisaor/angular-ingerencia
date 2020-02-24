import { Component } from '@angular/core';
import { UserService } from './user.service';
import {DataSource} from '@angular/cdk/collections';
import {DataTableComponent} from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingerencia';
}
