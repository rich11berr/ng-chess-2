export interface TileData {
    type: Pieces,
    coord: number[],
    color: Color,
    isFirstMove?: boolean;
}

export enum Color {
    BLACK = 'black',
    WHITE = 'white'
}

export enum Pieces {
    PAWN = 'pawn',
    BISHOP = 'bishop',
    KNIGHT = 'knight',
    ROOK = 'rook',
    QUEEN = 'queen',
    KING = 'king'
}