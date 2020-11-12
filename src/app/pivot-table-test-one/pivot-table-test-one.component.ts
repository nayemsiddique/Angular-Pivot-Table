import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebdatarocksComponent } from '../webdatarocks/webdatarocks.component';


@Component({
  selector: 'app-pivot-table-test-one',
  templateUrl: './pivot-table-test-one.component.html',
  styleUrls: ['./pivot-table-test-one.component.scss']
})
export class PivotTableTestOneComponent implements OnInit {

  @ViewChild("pivot1", {static: false}) child: WebdatarocksComponent;

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksComponent', this.child);
  }

  onCustomizeCell(
    cell: WebDataRocks.CellBuilder,
    data: WebDataRocks.CellData
  ): void {
    if (data.isClassicTotalRow) {
      cell.addClass('fm-total-classic-r');
    }
    if (data.isGrandTotalRow) {
      cell.addClass('fm-grand-total-r');
    }
    if (data.isGrandTotalColumn) {
      cell.addClass('fm-grand-total-c');
    }
  }

  onReportComplete(): void {
    this.child.webDataRocks.off('reportcomplete');
    this.child.webDataRocks.setReport({
      dataSource: {
        filename: 'https://cdn.webdatarocks.com/data/data.json',
      },
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
