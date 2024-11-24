import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useGetNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browse;
