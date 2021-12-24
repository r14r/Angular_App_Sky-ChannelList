import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { TableDemosRoutingModule } from './routing.module';
import { TableDemosComponent } from './component';
import { HighlightDirective } from '@app/@shared/@directives/highlight.directive';
import { FilterPipe } from '@app/@shared/@pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    MatSortModule,
    TableDemosRoutingModule,
  ],
  declarations: [TableDemosComponent, HighlightDirective, FilterPipe],
})
export class TableDemosModule {}
