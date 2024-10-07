import { useState } from "react";
import useConversations from "../zustant/useConverstion";
import toast from "react-hot-toast";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversations } = useConversations();

  const sendMessage = async (message) => {
    try {
      const response = await fetch(
        `/api/messages/send/${selectedConversations?._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
}