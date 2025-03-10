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
    this.fillBoard();
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

  fillBoard(): void {
    // Pawns
    for (let i = 0; i < 8; i++) {
      this.board[1][i] = { type: PieceType.Pawn, color: "white", image: images.whitePawn }  
      this.board[6][i] = { type: PieceType.Pawn, color: "black", image: images.blackPawn }
    }

    // Rooks
    this.board[0][0] = { type: PieceType.Rook, color: "white", image: images.whiteRook }  
    this.board[0][7] = { type: PieceType.Rook, color: "white", image: images.whiteRook }
    this.board[7][0] = { type: PieceType.Rook, color: "black", image: images.blackRook }  
    this.board[7][7] = { type: PieceType.Rook, color: "black", image: images.blackRook }

    // Knights
    this.board[0][1] = { type: PieceType.Knight, color: "white", image: images.whiteKnight }  
    this.board[0][6] = { type: PieceType.Knight, color: "white", image: images.whiteKnight }
    this.board[7][1] = { type: PieceType.Knight, color: "black", image: images.blackKnight }  
    this.board[7][6] = { type: PieceType.Knight, color: "black", image: images.blackKnight }

    // Bishops
    this.board[0][2] = { type: PieceType.Bishop, color: "white", image: images.whiteBishop }  
    this.board[0][5] = { type: PieceType.Bishop, color: "white", image: images.whiteBishop }
    this.board[7][2] = { type: PieceType.Bishop, color: "black", image: images.blackBishop }  
    this.board[7][5] = { type: PieceType.Bishop, color: "black", image: images.blackBishop }

    // Queens
    this.board[0][3] = { type: PieceType.Queen, color: "white", image: images.whiteQueen }  
    this.board[7][3] = { type: PieceType.Queen, color: "black", image: images.blackQueen }  
    
    // Kings
    this.board[0][4] = { type: PieceType.King, color: "white", image: images.whiteKing }
    this.board[7][4] = { type: PieceType.King, color: "black", image: images.blackKing }
  }
}
