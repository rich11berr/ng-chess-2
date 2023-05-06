import { Injectable } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';
import { BoardService } from 'src/app/board/board.service';
import { CanMoveService } from '../canMove.service';

@Injectable()
export class KingService {

    constructor(
        private boardService: BoardService,
        private canMoveService: CanMoveService
    ) { }

    public getMoves(currentData: TileData) {
        let possibleMoves = [];
        const row = currentData.coord[0];
        const column = currentData.coord[1];

        if (row > 1) {
            possibleMoves.push([row - 1, column + 1],
                [row - 1, column - 1],
                [row - 1, column],)
        }
        if (column > 1) {
            possibleMoves.push([row, column - 1],)
        }
        if (column < 8) {
            possibleMoves.push([row, column + 1],)
        }
        if (row < 8) {
            possibleMoves.push([row + 1, column + 1],
                [row + 1, column - 1],
                [row + 1, column],)
        }

        return possibleMoves;
    }

    public getAttacks(currentData: TileData) {
        return this.getMoves(currentData);
    }

}