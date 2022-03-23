import Image from "next/image";
import Head from "next/head";
import logo from "../public/logo.svg";
import home from "../public/home.svg";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Home = () => {
  return (
    <div className="space-y-10">
      <Head>
        <title>Linkedin: Log In or Sign up</title>
        <meta name="description" content="Linkedin login or signup page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-32 h-10">
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          <div className="pl-4">
            <button className="hover:bg-gray-200 text-gray-500 hover:text-gray-700 rounded-sm text p-2 mr-2 transition-colors duration-150 ease-in font-semibold">
              Join now
            </button>
            <button className="hover:outline-2 transition-all outline-blue-700 text-blue-700 font-semibold px-5 py-1.5 outline rounded-full">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10 z-10">
          <h1 className="text-3xl md:text-6xl xl:text-left text-center font-extralight text-amber-800 max-w-xl !leading-snug ">
            Welcome to your proffesional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80 z-0 xl:w-[700px] xl:h-[700px] top-14 -right-10">
          <Image src={home} layout="fill" priority />
        </div>
      </main>
    </div>
  );
};

export default Home;
