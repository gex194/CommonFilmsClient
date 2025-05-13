import Movie from './Movie';

interface MoviesResponse {
  page: number;
  results: Movie[],
  totalPages: number,
  totalResults: number
}

export default MoviesResponse;
