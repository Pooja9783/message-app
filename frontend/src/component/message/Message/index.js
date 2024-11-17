import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useConversations from "../../../zustant/useConverstion";
import { extractTime } from "../../../utils/extractTime";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversations } = useConversations();
  const forMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = forMe ? "chat-end" : "chat-start";
  const profilePic = forMe
    ? authUser.profilePic
    : selectedConversations?.profilePic;

  const bubbleBgColor = forMe ? "bg-blue-500" : "";

  const shouldShake = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName} w-[880px]`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="chat-pic" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shouldShake} pb-2`}
      >
        {message?.message}
      </div>
      <div className="chat-footer opacity-500 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
}
