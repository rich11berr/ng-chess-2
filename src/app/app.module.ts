import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardComponent } from './board/board.component';
import { PieceService } from './pieces/pieces.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardService } from './board/board.service';
import { RowPipe } from './board/boardRow.pipe';
import { BishopComponent } from './pieces/bishop/bishop.component';
import { KingComponent } from './pieces/king/king.component';
import { KnightComponent } from './pieces/knight/knight.component';
import { KnightService } from './pieces/knight/knight.service';
import { PawnComponent } from './pieces/pawn/pawn.component';
import { PawnService } from './pieces/pawn/pawn.service';
import { PieceComponent } from './pieces/piece.component';
import { QueenComponent } from './pieces/queen/queen.component';
import { RookComponent } from './pieces/rook/rook.component';
import { MatchControlsComponent } from './ui/match-controls/match-controls.component';
import { UpgradesComponent } from './ui/upgrades/upgrades.component';

const components = [
  BoardComponent,
  PawnComponent,
  PieceComponent,
  KnightComponent,
  BishopComponent,
  QueenComponent,
  KingComponent,
  RookComponent,
]

const services = [
  PawnService,
  KnightService
]

@NgModule({
  declarations: [
    ...components,
    AppComponent,
    RowPipe,
    MatchControlsComponent,
    UpgradesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [BoardService, PieceService, ...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
