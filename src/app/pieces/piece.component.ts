import { Component, Input, OnInit } from '@angular/core';
import { TileData } from '../board/board-spec';

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

    constructor() { }

    ngOnInit() { }


}