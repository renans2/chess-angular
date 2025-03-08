import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() row = 0;
  @Input() col = 0;
  piece = ''

  printRowCol(){
    console.log(this.row, this.col);
  }

  isWhite(){
    return (this.row + this.col) % 2 === 0;
  }
}
