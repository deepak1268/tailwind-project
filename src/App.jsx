import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar";
import { Profile } from "./components/profile";
import { Greeting } from "./components/greeting";

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
      <div className="ml-2 w-full grid grid-cols-13 gap-2">
        <div className="col-span-3 bg-[#fffffe] h-90 rounded-2xl shadow-lg -translate-y-10">
          <Profile></Profile>
        </div>
        <div className="col-span-7 bg-green-300 h-40 rounded-2xl shadow-lg">
          <Greeting></Greeting>
        </div>
        <div className="col-span-3 bg-yellow-300 h-40 rounded-2xl shadow-lg"></div>
      </div>
    </div>
  );
}

export default App;
