import { Injectable } from '@angular/core';
import { TileData } from '../board/board-spec';
import { BoardService } from '../board/board.service';

@Injectable({ providedIn: 'root' })
export class CanMoveService {
    constructor(private boardService: BoardService) { }

    public onAlly(target: number[], tile: TileData): boolean {
        if (this.boardService.boardState.find(item => (JSON.stringify(item.coord) == JSON.stringify(target) && (item.color === tile.color))) !== undefined) {
            return true
        } else return false;
    }

    public onEnemy(target: number[], tile: TileData): boolean {
        if (this.boardService.boardState.find(item => (JSON.stringify(item.coord) == JSON.stringify(target) && (item.color !== tile.color))) !== undefined) {
            return true
        } else return false;
    }

    public onPiece(target: number[], tile: TileData): boolean {
        if (this.boardService.boardState.find(item => JSON.stringify(item.coord) == JSON.stringify(target)) !== undefined) {
            return true
        } else return false;
    }

    public getTile(target: number[]): TileData | undefined {
        return this.boardService.boardState.find(item => JSON.stringify(item.coord) == JSON.stringify(target));
    }

}