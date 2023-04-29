import { CdkDragDrop, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { TileData } from '../board/board-spec';
import { BoardService } from '../board/board.service';
import { KingService } from './king/king.service';
import { KnightService } from './knight/knight.service';
import { PawnComponent } from './pawn/pawn.component';
import { PawnService } from './pawn/pawn.service';

@Injectable()
export class PieceService {


    constructor(
        private boardService: BoardService,
        private pawnService: PawnService,
        private knightService: KnightService,
        private kingService: KingService
    ) {
    }

    public onPieceDropped(event: CdkDragDrop<any>) {
        const previosTileId = event.previousContainer.element.nativeElement.id.split('').map(Number);
        const currentTileId = event.container.element.nativeElement.id.split('').map(Number);

        const currentItem: TileData = this.boardService.boardState.find(item => JSON.stringify(item.coord) == JSON.stringify(previosTileId))!;

        const possibleMoves = this.getPossibleMoves(currentItem);
        const possibleAttacks = this.getPossibleAttacks(currentItem);

        if (!this.canMove(currentTileId, possibleMoves!, possibleAttacks!)) {
            return
        }

        if (this.onAlly(currentTileId, currentItem)) {
            return
        }

        if (this.onEnemy(currentTileId, currentItem)) {
            if (possibleAttacks?.filter(attack => JSON.stringify(attack) === JSON.stringify(currentTileId)).length !== 0) {
                let indexOfTarget = this.boardService.boardState.indexOf(this.boardService.boardState.filter(item => JSON.stringify(item.coord) === JSON.stringify(currentTileId))[0])
                this.boardService.boardState.splice(indexOfTarget, 1);
            } else {
                return
            }

        }

        if (currentItem.isFirstMove) {
            currentItem.isFirstMove = false;
        }



        //delete previous pice
        const itemId = this.boardService.boardState.indexOf(currentItem);
        this.boardService.boardState.splice(itemId, 1);




        //add new piece
        currentItem.coord = currentTileId;
        this.boardService.boardState.push(currentItem);



        this.boardService.onMove();
    }



    public highlightMoves(item: TileData) {
        this.boardService.highlightedTiles = this.getPossibleMoves(item)!;
    }

    public deHighlightMoves() {
        this.boardService.highlightedTiles = [];
    }

    public highlightAttacks(item: TileData) {

        this.boardService.attackedTiles = this.getPossibleAttacks(item)!;
    }

    public deHighlightAttacks() {
        this.boardService.attackedTiles = [];
    }

    private onAlly(target: number[], tile: TileData): boolean {
        if (this.boardService.boardState.find(item => (JSON.stringify(item.coord) == JSON.stringify(target) && (item.color === tile.color))) !== undefined) {
            return true
        } else return false;
    }

    private onEnemy(target: number[], tile: TileData): boolean {
        if (this.boardService.boardState.find(item => (JSON.stringify(item.coord) == JSON.stringify(target) && (item.color !== tile.color))) !== undefined) {
            return true
        } else return false;
    }

    private getPossibleMoves(tile: TileData) {
        switch (tile.type) {
            case 'pawn':
                return this.pawnService.getMoves(tile).filter(item => !this.onAlly(item, tile));
            case 'knight':
                return this.knightService.getMoves(tile).filter(item => !this.onAlly(item, tile));
            case 'king':
                return this.kingService.getMoves(tile).filter(item => !this.onAlly(item, tile));
            default:
                return
        }
    }

    private getPossibleAttacks(tile: TileData) {
        switch (tile.type) {
            case 'pawn':
                return this.pawnService.getAttacks(tile).filter(item => this.onEnemy(item, tile));
            case 'knight':
                return this.knightService.getAttacks(tile).filter(item => this.onEnemy(item, tile));
            case 'king':
                return this.kingService.getAttacks(tile).filter(item => this.onEnemy(item, tile));
            default:
                return
        }
    }

    private canMove(target: number[], moves: number[][], attacks: number[][]): boolean {
        if ((moves.find(item => (JSON.stringify(item) == JSON.stringify(target))) !== undefined) || (attacks.find(item => (JSON.stringify(item) == JSON.stringify(target))) !== undefined)) {
            return true
        } else return false;
    }


}