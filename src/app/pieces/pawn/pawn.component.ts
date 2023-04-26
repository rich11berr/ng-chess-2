import { Component, OnInit } from '@angular/core';
import { PieceComponent } from '../piece.component';

@Component({
    selector: 'pawn',
    templateUrl: './pawn.component.html',
    styleUrls: ['../piece.scss'],
})

export class PawnComponent extends PieceComponent {
    constructor() {
        super()
    }

}