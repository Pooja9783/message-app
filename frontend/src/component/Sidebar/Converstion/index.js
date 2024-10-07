import React from "react";
import useConversations from "../../../zustant/useConverstion";
import { useSocketContext } from "../../../context/SocketContext";

export default function Conversation({ conversation, lastIndex, emoji }) {
  const { selectedConversations, setSelectedConversation } = useConversations();

  const isSelected = selectedConversations?._id === conversation?._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <div>
      <div
        className={`flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
        <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user-avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {lastIndex && <div className="divider my-0 py-0 h-1" />}
    </div>
  );
}
