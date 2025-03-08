import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  piece: Piece | undefined = undefined;

  isWhite(){
    return (this.row + this.col) % 2 === 0;
  }
}
