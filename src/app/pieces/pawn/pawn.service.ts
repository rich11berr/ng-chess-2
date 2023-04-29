import { Injectable } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';

@Injectable()
export class PawnService {
    constructor() { }

    public getMoves(currentData: TileData) {
        let possibleMoves = [];
        const row = currentData.coord[0];
        const column = currentData.coord[1];

        if (currentData.color === 'white') {
            if (currentData.isFirstMove === true) {
                possibleMoves.push([row, column + 1], [row, column + 2]);
            } else {
                possibleMoves.push([row, column + 1]);
            }
        } else {
            if (currentData.isFirstMove === true) {
                possibleMoves.push([row, column - 1], [row, column - 2]);
            } else {
                possibleMoves.push([row, column - 1]);
            }
        }

        return possibleMoves;
    }

    public getAttacks(currentData: TileData) {
        let possibleAttacks = [];
        const row = currentData.coord[0];
        const column = currentData.coord[1];

        if (currentData.color === 'white') {
            possibleAttacks.push([row + 1, column + 1], [row - 1, column + 1]);
        } else {
            possibleAttacks.push([row + 1, column - 1], [row - 1, column - 1]);
        }

        return possibleAttacks;
    }

}