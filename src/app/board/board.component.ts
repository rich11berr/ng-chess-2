import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PawnComponent } from '../pieces/pawn/pawn.component';
import { PieceService } from '../pieces/pieces.service';
import { TileData } from './board-spec';
import { BoardService } from './board.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})

export class BoardComponent implements OnInit, OnDestroy {

    public boardData = {
        row: [1, 2, 3, 4, 5, 6, 7, 8],
        column: [1, 2, 3, 4, 5, 6, 7, 8]
    }

    public boardState!: TileData[];

    private destroy$ = new Subject<void>();

    constructor(
        public boardService: BoardService,
        public pieceService: PieceService,
        private ref: ChangeDetectorRef,
    ) {
    }

    public getTileId(row: number, column: number): string {
        return `${row}${column}`
    }

    ngOnInit() {
        this.boardService.boardState$
            .pipe(takeUntil(this.destroy$))
            .subscribe(res => {
                this.boardState = res;
                // this.ref.detectChanges();
            })
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public getHighlightedTile(row: number, column: number) {
        let tile = [row, column]

        if (
            this.boardService.highlightedTiles.find(item => JSON.stringify(item) === JSON.stringify(tile)) !== undefined
        ) {
            return 'highlighted'
        } else {
            return ''
        }
    }

    public getAttackedTile(row: number, column: number) {
        let tile = [row, column]

        if (
            this.boardService.attackedTiles.find(item => JSON.stringify(item) === JSON.stringify(tile)) !== undefined
        ) {
            return 'attack'
        } else {
            return ''
        }
    }

    public blackOrWhite(row: number, column: number): string {
        if (row % 2 === 0) {
            if (column % 2 === 0) {
                return 'black'
            } else {
                return 'white'
            }
        } else {
            if (column % 2 === 0) {
                return 'white'
            } else {
                return 'black'
            }
        }
    }

    public getFlipClass() {
        if (this.boardService.boardFlipped) {
            return 'flipped'
        } else {
            return ''
        }
    }

    public getTile(row: number, column: number, tile: TileData): boolean {
        if (
            tile.coord[0] === row && tile.coord[1] === column
        ) {
            return true
        } else { return false }
    }
}