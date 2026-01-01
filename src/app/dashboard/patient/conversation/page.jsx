"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  FaPaperPlane,
  FaImage,
  FaEllipsisV,
  FaRegCalendarAlt,
  FaTrashAlt, // Added for delete option
} from "react-icons/fa";

const Conversation = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});
  const [msgCounts, setMsgCounts] = useState({});
  const [showOptions, setShowOptions] = useState(false); // Toggle for clear chat menu
  const chatEndRef = useRef(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser, chatHistory]);

  // Dynamic today's date
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const chatUsers = [
    {
      id: 1,
      name: "Dr. Ayesha Rahman",
      role: "Doctor",
      img: "https://i.pravatar.cc/150?u=1",
      email: "ayesha@medicare.com",
    },
    {
      id: 2,
      name: "Pharmacist - Medi Care",
      role: "Pharmacist",
      img: "https://i.pravatar.cc/150?u=2",
      email: "pharmacist@carematrix.com",
    },
    {
      id: 3,
      name: "Dr. Olivia Martinez",
      role: "Doctor",
      img: "https://i.pravatar.cc/150?u=3",
      email: "olivia@medicare.com",
    },
    {
      id: 4,
      name: "Dr. Michael Smith",
      role: "Doctor",
      img: "https://i.pravatar.cc/150?u=4",
      email: "michael@medicare.com",
    },
    {
      id: 5,
      name: "Dr. Emily Brown",
      role: "Doctor",
      img: "https://i.pravatar.cc/150?u=5",
      email: "emily@medicare.com",
    },
    {
      id: 6,
      name: "Medi Care Pharmacist",
      role: "Pharmacist",
      img: "https://i.pravatar.cc/150?u=6",
      email: "care@carematrix.com",
    },
    {
      id: 7,
      name: "AsaDur RahMan YeAd",
      role: "Pharmacist",
      img: "https://i.pravatar.cc/150?u=7",
      email: "asadur@carematrix.com",
    },
  ];

  // Function to send message
  const handleSend = () => {
    if (!message.trim() || !selectedUser) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Update history
    setChatHistory((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
    }));

    // Increment message count
    setMsgCounts((prev) => ({
      ...prev,
      [selectedUser.id]: (prev[selectedUser.id] || 0) + 1,
    }));

    setMessage("");
  };

  // Function to clear chat history for selected user
  const clearChat = () => {
    setChatHistory((prev) => ({
      ...prev,
      [selectedUser.id]: [],
    }));
    setMsgCounts((prev) => ({
      ...prev,
      [selectedUser.id]: 0,
    }));
    setShowOptions(false);
  };

  return (
    <div className="w-full space-y-4 max-w-full overflow-hidden">
      {/* Header Section */}
      <div className="bg-card border border-default rounded-xl p-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
              <span className="text-2xl">💬</span> Welcome, Patient
            </h1>
            <p className="text-secondary text-xs md:text-sm font-medium tracking-wide">
              Consult with doctors and pharmacists
            </p>
          </div>
          <div className="bg-main px-3 py-1.5 rounded-lg border border-default flex items-center gap-2 w-fit shadow-sm">
            <FaRegCalendarAlt className="text-primary text-xs" />
            <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-tight">
              {today}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-[550px] lg:h-[620px]">
        {/* Sidebar: User List */}
        <aside className="w-full lg:w-1/3 xl:w-1/4 bg-card border border-default rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 border-b border-default bg-[#F8FAFC]">
            <h2 className="text-sm md:text-base font-bold text-primary">
              Invite
            </h2>
            <p className="text-[10px] md:text-xs text-secondary">
              Select a user then start the conversation
            </p>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar bg-white">
            {chatUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => {
                  setSelectedUser(user);
                  setShowOptions(false);
                }}
                className={`flex items-center gap-3 p-3 cursor-pointer border-b border-gray-50 transition-all duration-300 ${
                  selectedUser?.id === user.id
                    ? "bg-blue-200/40 border-r-4  shadow-inner scale-[0.98]" // Background and shadow for active user
                    : "hover:bg-gray-50"
                }`}
              >
                <Image
                  src={user.img}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-default shadow-sm shrink-0 object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className={`text-xs font-bold truncate ${
                      selectedUser?.id === user.id
                        ? "text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    {user.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-secondary font-medium">
                      {user.role}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[8px] font-bold text-white transition-all ${
                        msgCounts[user.id] ? "bg-primary" : "bg-blue-500"
                      }`}
                    >
                      {msgCounts[user.id] ? `💬 ${msgCounts[user.id]}` : "New"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <main className="w-full lg:flex-1 bg-card border border-default rounded-xl flex flex-col shadow-sm overflow-hidden bg-white">
          {!selectedUser ? (
            /* Empty State View */
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-[#F8FAFC]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-default animate-pulse">
                <FaPaperPlane className="text-primary/20 text-2xl" />
              </div>
              <p className="text-secondary text-sm md:text-base font-medium opacity-60 italic">
                Select a user to start chatting.
              </p>
            </div>
          ) : (
            <>
              {/* Chat Header */}
              <div className="p-3 md:p-4 border-b border-default flex items-center justify-between bg-white shadow-sm z-20 relative">
                <div className="flex items-center gap-3">
                  <Image
                    src={selectedUser.img}
                    alt="User profile picture of the selected consultant" // Desciptive alt for better SEO
                    width={36} // w-9 means 36px (9 * 4)
                    height={36} // h-9 means 36px
                    className="rounded-full border border-primary/20 object-cover"
                  />
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-primary">
                      {selectedUser.name}
                    </h3>
                    <p className="text-[10px] text-muted">
                      {selectedUser.email}
                    </p>
                  </div>
                </div>

                {/* Options Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowOptions(!showOptions)}
                    className="text-muted p-2 hover:bg-main rounded-full transition-colors active:scale-90"
                  >
                    <FaEllipsisV size={14} />
                  </button>

                  {showOptions && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border border-default rounded-lg shadow-lg z-30 overflow-hidden animate-in fade-in zoom-in duration-200">
                      <button
                        onClick={clearChat}
                        className="w-full flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <FaTrashAlt /> Clear Chat
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Messages Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]">
                <div className="flex justify-center mb-6">
                  <span className="text-[10px] font-bold text-muted bg-white px-3 py-1 rounded-full border border-default shadow-sm uppercase tracking-wider">
                    Today, {today}
                  </span>
                </div>

                {chatHistory[selectedUser.id]?.map((msg) => (
                  <div
                    key={msg.id}
                    className="flex flex-col items-end gap-1 group"
                  >
                    <div className="bg-primary text-white px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[85%] md:max-w-[70%] shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-xs md:text-sm font-medium leading-relaxed">
                        {msg.text}
                      </p>
                    </div>
                    <span className="text-[9px] text-muted font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {msg.time}
                    </span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Area */}
              <div className="p-3 md:p-4 border-t border-default bg-white">
                <div className="flex items-center gap-2 md:gap-3">
                  <button className="text-muted p-2.5 hover:bg-main rounded-lg border border-default transition-all hover:text-primary">
                    <FaImage size={18} />
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      className="w-full bg-main border border-default rounded-xl px-4 py-2.5 text-xs md:text-sm focus:outline-none focus:border-primary transition-all shadow-inner"
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    className="bg-primary text-white px-4 md:px-6 py-2.5 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={!message.trim()}
                  >
                    <span className="hidden md:inline text-xs md:text-sm font-bold">
                      Send
                    </span>
                    <FaPaperPlane size={14} />
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Conversation;
