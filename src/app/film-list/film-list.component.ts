import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../service/characters.service';
import { Characters } from '../interfaces/characters';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit{

  constructor(private filmService: CharactersService){}
  characters:Characters[] = []
  errorMessage:String = ''

  ngOnInit(): void {
    this.filmService.getCharacterData().subscribe({
      next: chars => this.characters = chars,
      error: err => this.errorMessage = err
    })
  }
}
