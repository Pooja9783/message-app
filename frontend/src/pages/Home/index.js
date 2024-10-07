import React from "react";
import Sidebar from "../../component/Sidebar";
import MessageContainer from "../../component/message/MessageContainer";

export default function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
