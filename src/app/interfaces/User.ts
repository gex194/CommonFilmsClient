import Movie from './Movie';

interface User {
  id: number,
  name: string;
  email: string;
  password: string;
  watchList: Movie[];
  friendList: User[];
  isAdmin: boolean;
  isDeleted: boolean;
}

export default User;
