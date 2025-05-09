import Genre from '../enums/Genre';

interface Movie {
  id: number;
  title: string;
  description: string;
  year: number;
  poster: string;
  rating: number;
  userId: number;
  genres: Genre[];
}

export default Movie;
