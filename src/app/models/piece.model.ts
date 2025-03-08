import { PieceType } from "./piece-type.enum";

export interface Piece {
    type: PieceType;
    color: 'white' | 'black';
    image: string;
}
