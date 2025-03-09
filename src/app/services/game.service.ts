import { Injectable } from '@angular/core';
import { Piece } from '../models/piece.model';
import { Square } from '../models/square.model';
import { PieceType } from '../models/piece-type.enum';
import { images } from './images';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: (Piece | undefined)[][] = Array.from({ length: 8 }, () => Array(8).fill(undefined));
  originSquare: Square | undefined;
  dstSquare: Square | undefined;
  currentPlayer: "white" | "black" = "white";

  constructor() { 
    for (let i = 0; i < 8; i++) {
      this.board[1][i] = {
        type: PieceType.Pawn,
        color: "white",
        image: images.whitePawn
      }  
      
      this.board[6][i] = {
        type: PieceType.Pawn,
        color: "black",
        image: images.blackPawn
      }
    }

    // console.log(this.board);
  }

  squareClick(square: Square): void {
    if(this.originSquare === undefined){
      this.originSquare = square
    } else {
      this.dstSquare = square
    }
  }

  getPieceImage(square: Square): string | undefined {
    return this.board[square.row][square.col]?.image;
  }
}
