import Image from "next/image";
import logo from "../public/logo.svg";
import HeaderLink from "../components/HeaderLink";

const Home = () => {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-32 h-10">
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center space-x-1 sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink />
            <HeaderLink />
            <HeaderLink />
            <HeaderLink />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
