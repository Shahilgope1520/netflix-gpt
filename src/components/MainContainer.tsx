import { useTypedSelector } from "../hooks/useReduxTypedHooks";
import VideoBackground from "./VideoBackground";
import VideoDescription from "./VideoDescription";

const MainContainer = () => {
  const movies = useTypedSelector((store) => store.movie);
  const mainMovie = movies?.nowPlayingMovies?.[0];
  if (!mainMovie) {
    return;
  }
  const { id, overview, title } = mainMovie;
  return (
    <div>
      <VideoDescription title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
