import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversations from "../zustant/useConverstion";

import notificationSound from "../assets/sounds/notification.mp3";
export default function useListendMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversations();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
  return {};
}
