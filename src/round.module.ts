import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoundComponent} from './round.component';
import {RoundService} from '../src/round.service';

@NgModule({
  declarations: [
    RoundComponent
  ],
  imports: [CommonModule],
  exports: [RoundComponent],
  providers: [RoundService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RoundModule {}