import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import NetflixLogo from "../assets/images/Netflix_Logo_PMS.png";
import { useTypedSelector } from "../hooks/useReduxTypedHooks";

const Header = () => {
  const user = useTypedSelector((state) => state.user);
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
    } catch (error) {
      console.error("Error signing out:", error); // Handle error if sign out fails
    }
  };
  return (
    <div className="absolute w-full z-10 p-2  bg-gradient-to-b from-black to-transparent">
      <div className="flex justify-between">
        <img className="w-44" src={NetflixLogo} alt="Netflix Logo" />
        {user?.email && (
          <div className="sm:flex sm:items-baseline sm:space-x-2">
            <p className="text-white text-xs sm:text-sm md:text-base truncate max-w-[150px] sm:max-w-[200px]">
              {user?.email}
            </p>
            <button
              className="text-white text-xs sm:text-sm md:text-base"
              onClick={handleSignOut}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
