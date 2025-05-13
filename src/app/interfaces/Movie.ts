interface Movie {
  id: number,
  adult: boolean,
  backdropPath: string,
  genreIds: number[],
  originalLanguage: string,
  originalTitle: string,
  overview: string,
  popularity: number,
  posterPath: string,
  releaseDate: string,
  title: string,
  voteAverage: number,
  voteCount: number,
  video: boolean,
}

export default Movie;
