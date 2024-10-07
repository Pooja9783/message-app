import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useGetConversations from "../../../hooks/useGetConverstions";
import useConversations from "../../../zustant/useConverstion";
import toast from "react-hot-toast";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversations();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters");
    }

    const chat = conversations.find((e) =>
      e?.fullName?.toLowerCase().includes(search.toLowerCase())
    );

    console.log(chat);

    if (chat) {
      setSelectedConversation(chat);
      setSearch("");
    } else toast.error("No Such User Found");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="input rounded-full focus:outline-none"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}
