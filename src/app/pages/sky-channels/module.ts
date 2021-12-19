import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { SkyChannelsRoutingModule } from './routing.module';
import { SkyChannelsComponent } from './component';
import { HighlightDirective } from '@app/@shared/@directives/highlight.directive';
import { FilterPipe } from '@app/@shared/@pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    SkyChannelsRoutingModule,
  ],
  declarations: [SkyChannelsComponent, HighlightDirective, FilterPipe],
})
export class SkyChannelsModule {}
