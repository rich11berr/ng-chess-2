import { Component } from '@angular/core';
import { BoardService } from 'src/app/board/board.service';
import { PieceComponent } from '../piece.component';
import { PieceService } from '../pieces.service';

@Component({
  selector: 'queen',
  templateUrl: './queen.component.html',
  styleUrls: ['../piece.scss'],
})
export class QueenComponent extends PieceComponent {

  constructor(
    boardService: BoardService,
    pieceService: PieceService
  ) {
    super(boardService, pieceService)
  }

}
