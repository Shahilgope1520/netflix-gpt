import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  [key: string]: unknown; // To handle dynamic properties
}

interface MoviesState {
  nowPlayingMovies: Movie[] | null;
}

const initialState: MoviesState = {
  nowPlayingMovies: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { setNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
