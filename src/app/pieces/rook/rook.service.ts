import { Injectable } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';
import { BoardService } from 'src/app/board/board.service';
import { CanMoveService } from '../canMove.service';
import { PieceService } from '../pieces.service';

@Injectable()
export class RookService {

    constructor(
        private boardService: BoardService,
        private canMoveService: CanMoveService
    ) { }

    public getMoves(currentData: TileData) {
        const possibleMoves = [];

        const row = currentData.coord[0];
        const column = currentData.coord[1];

        //up
        for (let i = column + 1; i <= 8; i++) {

            if (!this.canMoveService.onPiece([row, i], currentData)) {
                possibleMoves.push([row, i]);
            } else {
                possibleMoves.push([row, i]);
                break;
            }
        }

        //down
        for (let i = column - 1; i >= 1; i--) {

            if (!this.canMoveService.onPiece([row, i], currentData)) {
                possibleMoves.push([row, i]);
            } else {
                possibleMoves.push([row, i]);
                break;
            }
        }

        //right
        for (let i = row + 1; i <= 8; i++) {

            if (!this.canMoveService.onPiece([i, column], currentData)) {
                possibleMoves.push([i, column]);
            } else {
                possibleMoves.push([i, column]);
                break;
            }
        }

        //left
        for (let i = row - 1; i >= 1; i--) {

            if (!this.canMoveService.onPiece([i, column], currentData)) {
                possibleMoves.push([i, column]);
            } else {
                possibleMoves.push([i, column]);
                break;
            }
        }

        return possibleMoves;
    }

    public getAttacks(currentData: TileData) {
        return this.getMoves(currentData)
    }

}