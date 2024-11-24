import useGetMovieTrailor from "../hooks/useGetMovieTrailor";
import { useTypedSelector } from "../hooks/useReduxTypedHooks";

const VideoBackground: React.FC<{ movieId: string }> = ({ movieId }) => {
  const trailorVideo = useTypedSelector((store) => store.movie?.movieTrailor);
  useGetMovieTrailor(movieId);
  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailorVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
