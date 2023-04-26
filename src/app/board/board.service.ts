import { Injectable } from '@angular/core';
import { Color, Pieces, TileData } from './board-spec';

@Injectable()
export class BoardService {

    private initialState: TileData[] = [
        {
            type: Pieces.PAWN,
            coord: [1, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [2, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [3, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [4, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [5, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [6, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [7, 2],
            color: Color.WHITE
        },
        {
            type: Pieces.PAWN,
            coord: [8, 2],
            color: Color.WHITE
        },
    ]

    public boardState: TileData[] = this.initialState;

    constructor() { }

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

    public getTile(row: number, column: number, tile: TileData): boolean {
        if (
            tile.coord[0] === row && tile.coord[1] === column
        ) {
            return true
        } else { return false }
    }

}