import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { TileData } from '../board/board-spec';
import { BoardService } from '../board/board.service';
import { PieceService } from './pieces.service';

@Component({
    selector: 'piece',
    template: ''
})

export class PieceComponent implements OnInit {

    @Input() data!: TileData

    get isWhite(): boolean {
        return this.data.color === 'white' ? true : false
    }

    get type(): string {
        return this.data.type
    }

    get image(): string {
        return `../../../assets/pieces/${this.isWhite ? 'w' : 'b'}_${this.type}_svg_withShadow.svg`
    }

    constructor(
        public boardService: BoardService,
        public pieceService: PieceService,
    ) { }

    ngOnInit() { }

    public onDragStart(event: any) {
        this.pieceService.highlightMoves(this.data);
        this.pieceService.highlightAttacks(this.data);
    }

    public onDragEnd(event: any) {
        this.pieceService.deHighlightMoves();
        this.pieceService.deHighlightAttacks();
    }






}