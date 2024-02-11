import { UserButton, UserProfile } from "@clerk/clerk-react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToMuayThai = () => {
    router.push("/muaythai");
  };

  const navigateToWeather = () => {
    router.push("/weather");
  };

  return (
    <div className="bg-thailand-blue py-2">
      <div className="w-4/5 mx-auto bg-thailand-red rounded-full shadow-md overflow-hidden">
        <div className="flex items-center justify-between px-10 py-3">
          <div className="flex items-center gap-4">
            <div
              className="font-bold text-sm text-thailand-blue uppercase"
              onClick={navigateToHome}
              style={{ cursor: "pointer" }}
            >
              Land of Smiles
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="space-x-4">
              <a
                href="#"
                className="text-xs uppercase text-thailand-blue hover:text-white transition duration-300"
              >
                Planner
              </a>

              <button
                onClick={navigateToMuayThai}
                className="text-xs uppercase text-thailand-blue hover:text-white transition duration-300"
              >
                Muay Thai
              </button>
              <button
                onClick={navigateToWeather}
                className="text-xs uppercase text-thailand-blue hover:text-white transition duration-300"
              >
                Weather
              </button>
              
               
              
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
