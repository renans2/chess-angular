import { Color } from "./color.enum";
import { PieceType } from "./piece-type.enum";

export interface Piece {
    type: PieceType;
    color: Color;
    image: string;
}
