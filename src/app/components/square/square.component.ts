import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Piece } from '../../models/piece.model';

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
  piece: Piece | undefined

  isWhite(){
    return (this.row + this.col) % 2 === 0;
  }

  handleClick(): void {
    this.gameService.squareClick({
      row: this.row,
      col: this.col,
    });
  }
}
