import { CdkDragDrop, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { TileData } from '../board/board-spec';
import { BoardService } from '../board/board.service';
import { KnightService } from './knight/knight.service';
import { PawnComponent } from './pawn/pawn.component';
import { PawnService } from './pawn/pawn.service';

@Injectable()
export class PieceService {


    constructor(
        private boardService: BoardService,
        private pawnService: PawnService,
        private knightService: KnightService,
    ) {
    }

    public onPieceDropped(event: CdkDragDrop<any>) {
        // console.log(event)
        const previosTileId = event.previousContainer.element.nativeElement.id.split('').map(Number);
        const currentTileId = event.container.element.nativeElement.id.split('').map(Number);

        const currentItem: TileData = this.boardService.boardState.find(item => JSON.stringify(item.coord) == JSON.stringify(previosTileId))!;

        const possibleMoves = this.getPossibleMoves(currentItem);

        if (!this.canMove(currentTileId, possibleMoves!)) {
            return
        }

        if (this.onAlly(currentTileId)) {
            return
        }

        if (currentItem.isFirstMove) {
            currentItem.isFirstMove = false;
        }



        const itemId = this.boardService.boardState.indexOf(currentItem);
        this.boardService.boardState.splice(itemId, 1);

        currentItem.coord = currentTileId;
        this.boardService.boardState.push(currentItem);
    }

    public onAlly(target: number[]): boolean {
        if (this.boardService.boardState.find(item => JSON.stringify(item.coord) == JSON.stringify(target)) !== undefined) {
            return true
        } else return false;
    }

    public highlightMoves(item: TileData) {
        this.boardService.highlightedTiles = this.getPossibleMoves(item)!;
    }

    public deHighlightMoves() {
        this.boardService.highlightedTiles = [];
    }

    private getPossibleMoves(item: TileData) {
        switch (item.type) {
            case 'pawn':
                return this.pawnService.getMoves(item).filter(item => !this.onAlly(item));;
            case 'knight':
                return this.knightService.getMoves(item).filter(item => !this.onAlly(item));
            default:
                return
        }
    }

    private canMove(target: number[], moves: number[][]): boolean {
        if (moves.find(item => JSON.stringify(item) == JSON.stringify(target)) !== undefined) {
            return true
        } else return false;
    }


}