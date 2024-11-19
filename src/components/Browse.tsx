import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
