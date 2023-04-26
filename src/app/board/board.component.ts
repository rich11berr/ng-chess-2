import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

    public boardData = {
        row: [1, 2, 3, 4, 5, 6, 7, 8],
        column: [1, 2, 3, 4, 5, 6, 7, 8]
    }


    constructor(
        public boardService: BoardService,
    ) { }

    ngOnInit() { }
}