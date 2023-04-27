import { Injectable } from '@angular/core';
import { Color, Pieces, TileData } from './board-spec';

@Injectable()
export class BoardService {

    private initialState: TileData[] = [
        {
            type: Pieces.PAWN,
            coord: [1, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [2, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [3, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [4, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [5, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [6, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [7, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [8, 2],
            color: Color.WHITE,
            isFirstMove: true
        },
        {
            type: Pieces.BISHOP,
            coord: [6, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.BISHOP,
            coord: [3, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.KNIGHT,
            coord: [7, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.KNIGHT,
            coord: [2, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.ROOK,
            coord: [8, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.ROOK,
            coord: [1, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.QUEEN,
            coord: [4, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.KING,
            coord: [5, 1],
            color: Color.WHITE,
        },
        {
            type: Pieces.PAWN,
            coord: [1, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [2, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [3, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [4, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [5, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [6, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [7, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.PAWN,
            coord: [8, 7],
            color: Color.BLACK,
            isFirstMove: true
        },
        {
            type: Pieces.KNIGHT,
            coord: [2, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.KNIGHT,
            coord: [7, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.ROOK,
            coord: [1, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.ROOK,
            coord: [8, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.BISHOP,
            coord: [3, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.BISHOP,
            coord: [6, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.QUEEN,
            coord: [4, 8],
            color: Color.BLACK,
        },
        {
            type: Pieces.KING,
            coord: [5, 8],
            color: Color.BLACK,
        },
    ]

    public boardState: TileData[] = this.initialState;

    public highlightedTiles: number[][] = [];

    constructor() { }



}