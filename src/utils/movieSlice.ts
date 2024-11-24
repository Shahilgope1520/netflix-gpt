import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, MoviesState, MovieVideo } from "../types/movieTypes";

const initialState: MoviesState = {
  nowPlayingMovies: [],
  movieTrailor: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action?.payload || [];
    },
    setMovieTrailor: (state, action: PayloadAction<MovieVideo>) => {
      state.movieTrailor = action?.payload;
    },
  },
});

export const { setNowPlayingMovies, setMovieTrailor } = moviesSlice.actions;

export default moviesSlice.reducer;
