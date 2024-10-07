import { create } from "zustand";

const useConversations = create((set) => ({
  selectedConversations: null,
  setSelectedConversation: (selectedConversations) =>
    set({ selectedConversations }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));


export default useConversations