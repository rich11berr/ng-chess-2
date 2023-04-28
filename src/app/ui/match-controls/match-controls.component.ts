import { ChangeDetectorRef, Component } from '@angular/core';
import { BoardService } from 'src/app/board/board.service';

@Component({
  selector: 'match-controls',
  templateUrl: './match-controls.component.html',
  styleUrls: ['./match-controls.component.scss']
})
export class MatchControlsComponent {

  constructor(
    public boardService: BoardService,
    private ref: ChangeDetectorRef,
  ) { }

  public undoMove() {
    this.boardService.undoMove();
    this.ref.detectChanges();
  }

  public resetGame() {
    this.boardService.resetGame();
    this.ref.detectChanges();
  }

}
