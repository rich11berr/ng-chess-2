import { Injectable } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';
import { BoardService } from 'src/app/board/board.service';
import { CanMoveService } from '../canMove.service';

@Injectable()
export class BishopService {

    constructor(
        private boardService: BoardService,
        private canMoveService: CanMoveService
    ) { }

    public getMoves(currentData: TileData) {
        const possibleMoves = [];

        const row = currentData.coord[0];
        const column = currentData.coord[1];

        //up-right
        for (let i = row + 1, j = column + 1; i <= 8 && j <= 8; i++, j++) {
            if (!this.canMoveService.onPiece([i, j], currentData)) {
                possibleMoves.push([i, j]);
            } else {
                possibleMoves.push([i, j]);
                break;
            }
        }

        //up-left
        for (let i = row + 1, j = column - 1; i <= 8 && j >= 1; i++, j--) {
            if (!this.canMoveService.onPiece([i, j], currentData)) {
                possibleMoves.push([i, j]);
            } else {
                possibleMoves.push([i, j]);
                break;
            }
        }

        //down-right
        for (let i = row - 1, j = column + 1; i >= 1 && j <= 8; i--, j++) {
            if (!this.canMoveService.onPiece([i, j], currentData)) {
                possibleMoves.push([i, j]);
            } else {
                possibleMoves.push([i, j]);
                break;
            }
        }

        //down-left
        for (let i = row - 1, j = column - 1; i >= 1 && j >= 1; i--, j--) {
            if (!this.canMoveService.onPiece([i, j], currentData)) {
                possibleMoves.push([i, j]);
            } else {
                possibleMoves.push([i, j]);
                break;
            }
        }

        return possibleMoves;
    }

    public getAttacks(currentData: TileData) {
        return this.getMoves(currentData)
    }

}