import { Avatar } from "@mui/material";
import Image from "next/image";
import bgImg from "../public/bg.webp";
import { signOut, useSession } from "next-auth/react";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* top */}
      <div className="bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="h-14 relative w-full">
          <Image src={bgImg} layout="fill" priority />
        </div>
        <Avatar
          onClick={signOut}
          src={session?.user?.image}
          className="!h-14 !w-14 !border-[1px] !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-y-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            {session?.user?.name}
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm ">
            {session?.user?.email}
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,342</span>
            </div>
          </div>
          <div className="sidebarButton">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            <h4 className="dark:text-white font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Try Premium for free
            </h4>
          </div>
          <div className="sidebarButton flex items-center space-x-1.5">
            <BookmarkOutlinedIcon className="!-ml-1" />
            <h4 className="dark:text-white font-medium">My items</h4>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="hidden md:flex bg-white dark:bg-[#1d2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 dark:border-none">
        <p className="sidebarLinks">Groups</p>
        <div className="flex justify-between items-center">
          <p className="sidebarLinks">Events</p>
          <AddRoundedIcon className="!h-5 !cursor-pointer" />
        </div>
        <p className="sidebarLinks">Followed Hashtags</p>
        <div className="sidebarButton text-center">
          <h4 className="dark:text-white font-medium text-sm">Discover More</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
