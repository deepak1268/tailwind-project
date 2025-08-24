import { useState } from "react";
import { Home, Group, Card, User, Settings } from "./icons";

export const Sidebar = () => {
  const [sideBar, setSideBar] = useState(true);

  if (sideBar) {
    return (
      <div className="transition-all duration-300 ease-in-out w-80 border-2 border-[#efeeef] bg-[#fffffe]">
        <div className="mt-2 pl-5">
          <SidebarToggle sideBar={sideBar} setSideBar={setSideBar} />
        </div>
        <SidebarComponent icon={Home}>Home</SidebarComponent>
        <SidebarComponent icon={Group}>Webinar</SidebarComponent>
        <SidebarComponent icon={Card}>Billing</SidebarComponent>
        <SidebarComponent icon={User}>User Management</SidebarComponent>
        <SidebarComponent icon={Settings}>Settings</SidebarComponent>
      </div>
    );
  }
  return (
    <div className="transition-all duration-300 ease-in-out w-16 border-2 border-[#efeeef]">
      <div className="mt-2 flex justify-center">
        <SidebarToggle sideBar={sideBar} setSideBar={setSideBar} />
      </div>
      <ClosedSidebarContent />
    </div>
  );
};

function SidebarToggle({ sideBar, setSideBar }) {
  return (
    <div
      onClick={() => {
        setSideBar(!sideBar);
      }}
      className="cursor-pointer hover:bg-[#e5e9ec]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}

function SidebarComponent({ children, icon: Homeicon }) {
  return (
    <div className="flex justify-between m-2 h-16 rounded-xl border-solid p-4 cursor-pointer hover:bg-[#e5e9ec]">
      <div>{children}</div>
      <Homeicon onClick={() => {}} />
    </div>
  );
}

function ClosedSidebarContent(){
  return <div className='mt-2'>
    <div className='flex justify-center items-center h-16 m-2 rounded-xl cursor-pointer hover:bg-[#e5e9ec]'>
      <Home/>
    </div>
    <div className='flex justify-center items-center h-16 m-2 rounded-xl cursor-pointer hover:bg-[#e5e9ec]'>
      <Group />
    </div>
    <div className='flex justify-center items-center h-16 m-2 rounded-xl cursor-pointer hover:bg-[#e5e9ec]'>
      <Card />
    </div>
    <div className='flex justify-center items-center h-16 m-2 rounded-xl cursor-pointer hover:bg-[#e5e9ec]'>
      <User />
    </div>
    <div className='flex justify-center items-center h-16 m-2 rounded-xl cursor-pointer hover:bg-[#e5e9ec]'>
      <Settings />
    </div>
  </div>
}
