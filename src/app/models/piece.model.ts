import { Color } from "./color.type";
import { PieceType } from "./piece-type.enum";

export interface Piece {
    type: PieceType;
    color: Color;
    image: string;
}
