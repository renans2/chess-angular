import { Injectable } from '@angular/core';
import { Piece } from '../models/piece.model';
import { Square } from '../models/square.model';
import { PieceType } from '../models/piece-type.enum';
import { images } from './images';
import { Color } from '../models/color.type';
import { SquareComponent } from '../components/square/square.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  board: SquareComponent[][] = [];
  originSquare: Square | undefined;
  dstSquare: Square | undefined;
  selectedPiece: Piece | undefined;
  possibleMoves: (Square | undefined)[] = [];
  currentPlayer: Color = 'white';

  // constructor() { 
  //   this.fillBoard();
  //   // console.log(this.board);
  // }

  setBoardMatrix(squares: SquareComponent[]): void {
    this.board = [];

    for (let i = 0; i < 8; i++) {
      this.board.push(squares.slice(i * 8, (i + 1) * 8));
    }
  }

  squareClick(square: Square): void {
    if(this.originSquare === undefined && this.playerCanSelectPiece(square)){
      this.originSquare = square;
      this.selectedPiece = this.board[square.row][square.col].piece; 
      this.setPossibleMoves();
    } else if(this.originSquare !== undefined && this.possibleMoves.includes(square)) {
      this.dstSquare = square
      this.makePlay();
    }
  }

  resetGame(): void {
    this.fillBoard();
    this.originSquare = undefined;
    this.dstSquare = undefined;
    this.currentPlayer = 'white';
    this.possibleMoves = [];
  }

  playerCanSelectPiece(square: Square): boolean {
    const squareCmpnt = this.board[square.row][square.col];
    return squareCmpnt.piece !== undefined && 
           squareCmpnt.piece.color === this.currentPlayer;
  }

  playerCanMove(square: Square): boolean {
    
    return true;
  }

  setPossibleMoves(): void {
    switch (this.selectedPiece?.type) {
      case PieceType.Bishop:
        this.possibleMoves = this.getBishopMoves();
        break;
    
      default:
        break;
    }
  }

  makePlay(): void {
    this.originSquare = undefined;
    this.dstSquare = undefined;
  }

  getBishopMoves(): Square[] {
    return [];
  }

  getPawnMoves(): Square[] {
    return [];
  }

  getKingMoves(): Square[] {
    return [];
  }

  getQueenMoves(): Square[] {
    return [];
  }

  getKnightMoves(): Square[] {
    return [];
  }

  getRookMoves(): Square[] {
    return [];
  }

  fillBoard(): void {
    // Pawns
    for (let i = 0; i < 8; i++) {
      this.board[1][i].piece = { type: PieceType.Pawn, color: "white", image: images.whitePawn }  
      this.board[6][i].piece = { type: PieceType.Pawn, color: "black", image: images.blackPawn }
    }

    // Rooks
    this.board[0][0].piece = { type: PieceType.Rook, color: "white", image: images.whiteRook }  
    this.board[0][7].piece = { type: PieceType.Rook, color: "white", image: images.whiteRook }
    this.board[7][0].piece = { type: PieceType.Rook, color: "black", image: images.blackRook }  
    this.board[7][7].piece = { type: PieceType.Rook, color: "black", image: images.blackRook }

    // Knights
    this.board[0][1].piece = { type: PieceType.Knight, color: "white", image: images.whiteKnight }  
    this.board[0][6].piece = { type: PieceType.Knight, color: "white", image: images.whiteKnight }
    this.board[7][1].piece = { type: PieceType.Knight, color: "black", image: images.blackKnight }  
    this.board[7][6].piece = { type: PieceType.Knight, color: "black", image: images.blackKnight }

    // Bishops
    this.board[0][2].piece = { type: PieceType.Bishop, color: "white", image: images.whiteBishop }  
    this.board[0][5].piece = { type: PieceType.Bishop, color: "white", image: images.whiteBishop }
    this.board[7][2].piece = { type: PieceType.Bishop, color: "black", image: images.blackBishop }  
    this.board[7][5].piece = { type: PieceType.Bishop, color: "black", image: images.blackBishop }

    // Queens
    this.board[0][3].piece = { type: PieceType.Queen, color: "white", image: images.whiteQueen }  
    this.board[7][3].piece = { type: PieceType.Queen, color: "black", image: images.blackQueen }  
    
    // Kings
    this.board[0][4].piece = { type: PieceType.King, color: "white", image: images.whiteKing }
    this.board[7][4].piece = { type: PieceType.King, color: "black", image: images.blackKing }
  }
}
