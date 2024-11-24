import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoDescription: React.FC<{ title: string; overview: string }> = ({
  title,
  overview,
}) => {
  return (
    <div className="absolute aspect-video overflow-hidden text-white bg-gradient-to-r from-black/80 via-black/50 to-transparent px-20 py-[15%] rounded-lg shadow-lg">
      <div className="w-3/12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          {overview}
        </p>
        <div className="flex gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 w-full flex items-center justify-center gap-2">
            <FaPlay className="text-lg" /> Play
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg border border-gray-500 transition duration-300 w-full flex items-center justify-center gap-2">
            <FaInfoCircle className="text-lg" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
