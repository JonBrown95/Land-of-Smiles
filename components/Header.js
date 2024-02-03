import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-thailand-red text-white p-3">
      <h1 className="text-xl font-semibold">
        <Link href="/">Land of Smiles</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/weather">Weather</Link>
          </li>
          <li>
            <Link href="/planner">Itinerary Planner</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
