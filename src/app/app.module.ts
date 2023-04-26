import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardComponent } from './board/board.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardService } from './board/board.service';
import { RowPipe } from './board/boardRow.pipe';
import { PawnComponent } from './pieces/pawn/pawn.component';
import { PieceComponent } from './pieces/piece.component';

const components = [
  BoardComponent,
  PawnComponent,
  PieceComponent,
]

@NgModule({
  declarations: [
    ...components,
    AppComponent,
    RowPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
