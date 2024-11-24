export type Movie = {
  title: string;
  overview: string;
  id: string;
};

export type MovieVideo = {
  id?: string;
  key?: string;
  name?: string;
  site?: string;
  type?: string;
};

export type MovieVideosResponse = {
  id: number;
  results: MovieVideo[];
};

export type MoviesState = {
  nowPlayingMovies: Movie[];
  movieTrailor: MovieVideo | null;
};
