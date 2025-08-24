import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import { Profile } from "./components/profile";
import { Greeting } from "./components/greeting";
import { Schedule } from "./components/schedule";
import { Buttons } from "./components/buttons";
import { WebinarCard } from "./components/webinarCard";

function App() {
  return (
    <div className="h-screen flex bg-[#fcfcfe]">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="bg-black h-40"> </div>
      <div className="translate-x-86 mt-10 ">
        <Greeting></Greeting>
      </div>
      <div className="w-full grid grid-cols-12 gap-7">
        <div className="ml-5 col-span-3 bg-[#fffffe] h-90 rounded-2xl shadow-lg -translate-y-40">
          <Profile></Profile>
        </div>
        <div className="col-span-5 bg-[#fffffe] h-120 rounded-2xl shadow-lg p-10 translate-y-9">
          <Schedule></Schedule>
          <WebinarCard time={"11:30 AM"} status={true} title={"UX Webinar"}></WebinarCard>
          <div className="h-1 bg-gray-200"></div>
          <WebinarCard time={"11:30 AM"} status={false} title={"My First Webinar"}></WebinarCard>
          <div className="h-1 bg-gray-200"></div>
          <WebinarCard time={"11:30 AM"} status={false} title={"Important Webinar"}></WebinarCard>
          <div className="h-1 bg-gray-200"></div>
          <WebinarCard time={"11:30 AM"} status={false} title={"Webinar 1"}></WebinarCard>
        </div>
        <div className="col-span-4 bg-[#fffffe] h-80 rounded-2xl shadow-lg translate-y-9 flex justify-center items-center">
          <Buttons></Buttons>
        </div>
      </div>
    </div>
  );
}

export default App;
