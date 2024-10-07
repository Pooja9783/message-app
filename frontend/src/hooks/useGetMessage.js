import { useState, useEffect } from "react";
import useConversations from "../zustant/useConverstion";
import toast from "react-hot-toast";

export default function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversations } = useConversations();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `/api/messages/${selectedConversations?._id}`
        );
        const data = await response.json();
        if (data.error) throw new Error(data.error);

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversations?._id) {
      getMessage();
    }
  }, [selectedConversations?._id, setMessages]);

  return { loading, messages };
}
