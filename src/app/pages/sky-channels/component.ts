import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { ChannelsService } from '@app/@shared/channel.service';

export interface Channel {
  name: string;
  channel: number;
}
@Component({
  selector: 'app-sky-channels',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class SkyChannelsComponent implements OnInit, AfterViewInit {
  searchText = '';

  dataSource: any;
  displayedColumns: string[] = ['channel', 'name'];

  isLoading = false;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private channelsService: ChannelsService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    this.dataSource = new MatTableDataSource<Channel>(
      this.channelsService.CHANNELS
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  ngOnInit() {
    /*
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      */
  }

  applyFilter(target: any) {
    var filterValue = target.value!.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      console.log(`announceSortChange: ${sortState.direction}`);
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
