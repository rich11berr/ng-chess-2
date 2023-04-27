import { Component } from '@angular/core';
import { BoardService } from 'src/app/board/board.service';
import { PieceComponent } from '../piece.component';
import { PieceService } from '../pieces.service';

@Component({
  selector: 'king',
  templateUrl: './king.component.html',
  styleUrls: ['../piece.scss'],
})
export class KingComponent extends PieceComponent {

  constructor(
    boardService: BoardService,
    pieceService: PieceService
  ) {
    super(boardService, pieceService)
  }

}
