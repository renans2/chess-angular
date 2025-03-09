import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-square',
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() row = 0;
  @Input() col = 0;
  gameService = inject(GameService);

  isWhite(){
    return (this.row + this.col) % 2 === 0;
  }

  handleClick(): void {
    this.gameService.squareClick({
      row: this.row,
      col: this.col,
    });
  }

  getPieceImage(): string | undefined {
    return this.gameService.getPieceImage({
      row: this.row, 
      col: this.col}
    );
  }
}
