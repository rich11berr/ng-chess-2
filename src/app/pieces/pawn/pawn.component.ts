import { Component, OnInit } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';
import { BoardService } from 'src/app/board/board.service';
import { PieceComponent } from '../piece.component';
import { PieceService } from '../pieces.service';

@Component({
    selector: 'pawn',
    templateUrl: './pawn.component.html',
    styleUrls: ['../piece.scss'],
})

export class PawnComponent extends PieceComponent {
    constructor(
        boardService: BoardService,
        pieceService: PieceService
    ) {
        super(boardService, pieceService)
    }

}