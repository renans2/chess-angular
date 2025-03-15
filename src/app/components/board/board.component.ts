import { Component, inject, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  imports: [SquareComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements AfterViewInit {
  rows = Array.from({ length: 8 });
  cols = Array.from({ length: 8 });
  gameService = inject(GameService);
  @ViewChildren(SquareComponent) squares!: QueryList<SquareComponent>

  ngAfterViewInit(): void {
    this.gameService.setBoardMatrix(this.squares.toArray());
  }
}
