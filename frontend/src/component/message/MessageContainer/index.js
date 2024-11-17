import React, { useEffect } from "react";
import MessageInput from "../MessageInput";
import Messages from "../Messages";
import useConversations from "../../../zustant/useConverstion";
import { useAuthContext } from "../../../context/AuthContext";

export default function MessageContainer() {
  const { selectedConversations, setSelectedConversation } = useConversations();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="mid:min-w-[450px] flex flex-col">
      <>
        {!selectedConversations ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-slate-200 px-4 py-4 mb-2">
              <span className="label-text">To : </span>
              <span className="font-bold">
                {selectedConversations?.fullName}
              </span>
            </div>
            <Messages />

            <MessageInput />
          </>
        )}
        {/* <Header /> */}
      </>
    </div>
  );
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-[1000px] h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col gap-2">
        <p className="text-black">Welcome {authUser.fullName}</p>
        <p className="text-black">Start your chat</p>
      </div>
    </div>
  );
};
