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
    <div className="sticky top-0 z-50">
      <div className="mx-auto bg-thailand-red shadow-md overflow-hidden">
        <div className="flex items-center justify-between px-10 py-3">
          <div className="flex items-center gap-4">
            <div
              className="font-bold text-lg text-white cursor-pointer"
              onClick={navigateToHome}
            >
              Land of Smiles
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="space-x-6">
              <a
                href="#"
                className="text-sm text-thailand-blue hover:text-white transition duration-300"
              >
                Planner
              </a>

              <button
                onClick={navigateToMuayThai}
                className="text-sm text-thailand-blue hover:text-white transition duration-300"
              >
                Muay Thai
              </button>
              <button
                onClick={navigateToWeather}
                className="text-sm text-thailand-blue hover:text-white transition duration-300"
              >
                Weather
              </button>
            </nav>
            <div className="flex items-center">
              <UserButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
