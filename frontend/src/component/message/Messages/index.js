import React, { useEffect, useRef } from "react";
import Message from "../Message";
import useGetMessage from "../../../hooks/useGetMessage";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import useListendMessages from "../../../hooks/useListendMessages";

export default function Messages() {
  const { messages, loading } = useGetMessage();
  useListendMessages();
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto w-[920px]">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message?._id} ref={lastMessage}>
            <Message key={message._id} message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-[#e7e0e0]">Send a message to start the conversation</p>
      )}
    </div>
  );
}
