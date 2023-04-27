import { Injectable } from '@angular/core';
import { TileData } from 'src/app/board/board-spec';
import { BoardService } from 'src/app/board/board.service';
import { PieceService } from '../pieces.service';

@Injectable()
export class KnightService {
    constructor(
        private boardService: BoardService
    ) { }

    // public getMoves(currentData: TileData) {
    //     let possibleMoves = [];
    //     const row = currentData.coord[0];
    //     const column = currentData.coord[1];

    //     if (column <= 2) {
    //         possibleMoves.push([row + 1, column + 2], [row + 2, column + 1]);
    //     } else if (column >= 7) {
    //         possibleMoves.push([row + 1, column - 2], [row + 2, column - 1]);
    //     }

    // }
    public getMoves(currentData: TileData) {
        let possibleMoves = [];
        const row = currentData.coord[0];
        const column = currentData.coord[1];

        // Первый возможный ход
        if (row - 2 >= 0 && column - 1 >= 0) {
            possibleMoves.push([row - 2, column - 1]);
        }
        // Второй возможный ход
        if (row - 2 >= 0 && column + 1 <= 8) {
            possibleMoves.push([row - 2, column + 1]);
        }
        // Третий возможный ход
        if (row - 1 >= 0 && column - 2 >= 0) {
            possibleMoves.push([row - 1, column - 2]);
        }
        // Четвертый возможный ход
        if (row - 1 >= 0 && column + 2 <= 8) {
            possibleMoves.push([row - 1, column + 2]);
        }
        // Пятый возможный ход
        if (row + 1 <= 8 && column - 2 >= 0) {
            possibleMoves.push([row + 1, column - 2]);
        }
        // Шестой возможный ход
        if (row + 1 <= 8 && column + 2 <= 8) {
            possibleMoves.push([row + 1, column + 2]);
        }
        // Седьмой возможный ход
        if (row + 2 <= 8 && column - 1 >= 0) {
            possibleMoves.push([row + 2, column - 1]);
        }
        // Восьмой возможный ход
        if (row + 2 <= 8 && column + 1 <= 8) {
            possibleMoves.push([row + 2, column + 1]);
        }

        return possibleMoves;
    }









}