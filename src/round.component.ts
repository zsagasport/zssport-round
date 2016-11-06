import { Component, OnInit, Input } from '@angular/core';

import { Round } from './round.model';

import { RoundService } from './round.service';

@Component({
    selector: 'zssport-round',
    template: `
        <article class="round" *ngIf="round">
            <h3>{{title}}</h3>
            
        </article>
        <span>Test1</span>
    `,
    styles: [`
        :host {
            display: block;
            font-weight: normal;
            margin: 5px;
        }
    `]
})

export class RoundComponent implements OnInit {
    title: string;
    @Input()
    roundId: number;
    round: Round;
    matches: Object[];

    constructor(private roundService: RoundService) {
    }

    getRound(): void {
        this.roundService.getRound(
            this.roundId
        ).then (
            round => {
                if (round) {
                    this.round = round;
                    this.title = 'Round ' + this.round.num;
                }
            }
        );
    }

    ngOnInit(): void {
        this.getRound();
    }
}