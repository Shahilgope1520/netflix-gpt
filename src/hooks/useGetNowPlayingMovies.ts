import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, nowPlayingMoviesApiUrl } from "../utils/constant";
import { setNowPlayingMovies } from "../utils/movieSlice";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = useCallback(async () => {
    try {
      const response = await fetch(nowPlayingMoviesApiUrl, API_OPTIONS);
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Movies fetched:", data?.results);
      dispatch(setNowPlayingMovies(data?.results));
    } catch (error) {
      console.error("Error fetching now-playing movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);
};

export default useGetNowPlayingMovies;
