import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
     <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
                  <h2>Matches requested by round</h2>
            </div>
            <div class="panel-body">
                <zssport-round [roundId]="2016170208"></zssport-round>
            </div>
        </div>
    </div>
  `
})
export class Demo {}
