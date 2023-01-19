import {Component, Input} from '@angular/core';
import {Characters} from "../interfaces/characters";

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {
  @Input() item ?: Characters
}
