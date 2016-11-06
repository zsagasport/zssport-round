import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoundModule} from '../src/round.module';

import {RoundService} from '../src/round.service';

import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule,RoundModule],
  bootstrap: [Demo],
  providers: [RoundService]
})
  
export class DemoModule {}