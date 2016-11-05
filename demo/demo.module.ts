import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ZssportRoundModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, ZssportRoundModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}