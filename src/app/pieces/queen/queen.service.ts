import { Injectable } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';
import { BoardService } from 'src/app/board/board.service';
import { BishopService } from '../bishop/bishop.service';
import { CanMoveService } from '../canMove.service';
import { RookService } from '../rook/rook.service';

@Injectable()
export class QueenService {
    constructor(
        private boardService: BoardService,
        private canMoveService: CanMoveService,
        private rookService: RookService,
        private bishopService: BishopService
    ) { }

    public getMoves(currentData: TileData) {
        const possibleMoves = [];

        // Combine rook and bishop moves to get queen moves
        possibleMoves.push(...this.rookService.getMoves(currentData));
        possibleMoves.push(...this.bishopService.getMoves(currentData));

        return possibleMoves;
    }

    public getAttacks(currentData: TileData) {
        return this.getMoves(currentData)
    }

}