import NetflixLogo from "../assets/images/Netflix_Logo_PMS.png";
const Header = () => {
  return (
    <div className="absolute w-full z-10 p-2  bg-gradient-to-b from-black to-transparent">
      <img className="w-44" src={NetflixLogo} />
    </div>
  );
};

export default Header;
