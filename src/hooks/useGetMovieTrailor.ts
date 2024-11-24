import { useCallback, useEffect } from "react";
import { useTypedDispatch } from "./useReduxTypedHooks";
import { MovieVideosResponse } from "../types/movieTypes";
import { API_OPTIONS } from "../utils/constant";
import { setMovieTrailor } from "../utils/movieSlice";

const useGetMovieTrailor = (movieId: string) => {
  const dispatch = useTypedDispatch();
  const getMovieTrailor = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data: MovieVideosResponse = await response.json();
    const movieTrailor = data?.results?.find(
      (movie) => movie?.type === "Trailer"
    );
    if (movieTrailor) dispatch(setMovieTrailor(movieTrailor));
  }, [dispatch, movieId]);
  useEffect(() => {
    getMovieTrailor();
  }, [getMovieTrailor]);
};

export default useGetMovieTrailor;
