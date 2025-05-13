import {Component, OnInit, signal} from '@angular/core';
import {DataView} from 'primeng/dataview';
import {SelectButton} from 'primeng/selectbutton';
import {MovieService} from '../../services/movie.service';
import {NgClass, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import MovieParams from '../../interfaces/MovieParams';
import {MovieListItemComponent} from '../movie-list-item/movie-list-item.component';

@Component({
  selector: 'app-movie-list',
  imports: [
    DataView,
    SelectButton,
    NgClass,
    FormsModule,
    NgForOf,
    MovieListItemComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  layout: "list" | "grid" = 'grid';
  options: string[] = ['list', 'grid']
  params: MovieParams = {
    page: 1,
    language: 'en-US',
    sortBy: 'desc'
  }
  movies = signal<any>([]);
  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this._movieService.fetchMovieList(this.params).subscribe(movies => {
      this.movies.set(movies.results);
      console.log(movies);
    });
  }
}
