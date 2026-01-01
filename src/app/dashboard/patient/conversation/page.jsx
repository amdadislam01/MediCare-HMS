"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  FaPaperPlane,
  FaImage,
  FaEllipsisV,
  FaRegCalendarAlt,
  FaTrashAlt,
  FaArrowLeft, // Back button for mobile
} from "react-icons/fa";

const Conversation = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState({});
  const [msgCounts, setMsgCounts] = useState({});
  const [showOptions, setShowOptions] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser, chatHistory]);

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const chatUsers = [
    { id: 1, name: "Dr. Ayesha Rahman", role: "Doctor", img: "https://i.pravatar.cc/150?u=1", email: "ayesha@medicare.com" },
    { id: 2, name: "Pharmacist - Medi Care", role: "Pharmacist", img: "https://i.pravatar.cc/150?u=2", email: "pharmacist@carematrix.com" },
    { id: 3, name: "Dr. Olivia Martinez", role: "Doctor", img: "https://i.pravatar.cc/150?u=3", email: "olivia@medicare.com" },
    { id: 4, name: "Dr. Michael Smith", role: "Doctor", img: "https://i.pravatar.cc/150?u=4", email: "michael@medicare.com" },
    { id: 5, name: "Dr. Emily Brown", role: "Doctor", img: "https://i.pravatar.cc/150?u=5", email: "emily@medicare.com" },
    { id: 6, name: "Medi Care Pharmacist", role: "Pharmacist", img: "https://i.pravatar.cc/150?u=6", email: "care@carematrix.com" },
    { id: 7, name: "AsaDur RahMan YeAd", role: "Pharmacist", img: "https://i.pravatar.cc/150?u=7", email: "asadur@carematrix.com" },
  ];

  const handleSend = () => {
    if (!message.trim() || !selectedUser) return;
    const newMessage = {
      id: Date.now(),
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setChatHistory((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
    }));
    setMsgCounts((prev) => ({
      ...prev,
      [selectedUser.id]: (prev[selectedUser.id] || 0) + 1,
    }));
    setMessage("");
  };

  const clearChat = () => {
    setChatHistory((prev) => ({ ...prev, [selectedUser.id]: [] }));
    setMsgCounts((prev) => ({ ...prev, [selectedUser.id]: 0 }));
    setShowOptions(false);
  };

  return (
    <div className="w-full space-y-4 max-w-full overflow-hidden h-[calc(100vh-40px)] flex flex-col">
      {/* Header Section - Hidden on mobile when chatting to save space */}
      <div className={`${selectedUser ? 'hidden md:block' : 'block'} bg-card border border-default rounded-xl p-4 shadow-sm`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
              <span className="text-2xl">💬</span> Welcome, Patient
            </h1>
            <p className="text-secondary text-xs md:text-sm font-medium">Consult with doctors and pharmacists</p>
          </div>
          <div className="hidden md:flex bg-main px-3 py-1.5 rounded-lg border border-default items-center gap-2 w-fit">
            <FaRegCalendarAlt className="text-primary text-xs" />
            <span className="text-xs font-bold text-secondary uppercase">{today}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 gap-4 overflow-hidden relative">
        {/* Sidebar: User List */}
        <aside className={`${selectedUser ? 'hidden lg:flex' : 'flex'} w-full lg:w-1/3 xl:w-1/4 bg-card border border-default rounded-xl flex-col overflow-hidden shadow-sm`}>
          <div className="p-4 border-b border-default bg-[#F8FAFC]">
            <h2 className="text-sm md:text-base font-bold text-primary">Invite</h2>
            <p className="text-[10px] md:text-xs text-secondary">Select a user then start the conversation</p>
          </div>
          <div className="flex-1 overflow-y-auto bg-white">
            {chatUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-50 transition-all ${
                  selectedUser?.id === user.id ? "bg-blue-50 border-r-4 border-primary" : "hover:bg-gray-50"
                }`}
              >
                <div className="relative shrink-0">
                  <Image src={user.img} alt={user.name} width={45} height={45} className="rounded-full object-cover" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-xs font-bold truncate text-gray-800">{user.name}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-secondary font-medium">{user.role}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold text-white ${msgCounts[user.id] ? "bg-primary" : "bg-blue-500"}`}>
                      {msgCounts[user.id] ? `💬 ${msgCounts[user.id]}` : "New"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <main className={`${!selectedUser ? 'hidden lg:flex' : 'flex'} w-full lg:flex-1 bg-card border border-default rounded-xl flex-col shadow-sm overflow-hidden bg-white`}>
          {!selectedUser ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-[#F8FAFC]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-default">
                <FaPaperPlane className="text-primary/20 text-2xl" />
              </div>
              <p className="text-secondary text-sm font-medium opacity-60 italic">Select a user to start chatting.</p>
            </div>
          ) : (
            <>
              {/* Chat Header */}
              <div className="p-3 md:p-4 border-b border-default flex items-center justify-between bg-white sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  {/* Back Button for Mobile */}
                  <button onClick={() => setSelectedUser(null)} className="lg:hidden p-2 -ml-2 text-primary hover:bg-gray-100 rounded-full">
                    <FaArrowLeft size={18} />
                  </button>
                  <Image src={selectedUser.img} alt={selectedUser.name} width={40} height={40} className="rounded-full border object-cover shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-xs md:text-sm font-bold text-primary truncate">{selectedUser.name}</h3>
                    <p className="text-[10px] text-muted truncate">{selectedUser.email}</p>
                  </div>
                </div>

                <div className="relative">
                  <button onClick={() => setShowOptions(!showOptions)} className="text-muted p-2 hover:bg-main rounded-full">
                    <FaEllipsisV size={14} />
                  </button>
                  {showOptions && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border border-default rounded-lg shadow-lg z-30 overflow-hidden">
                      <button onClick={clearChat} className="w-full flex items-center gap-2 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-50">
                        <FaTrashAlt /> Clear Chat
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Messages Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]">
                <div className="flex justify-center mb-4">
                  <span className="text-[9px] md:text-[10px] font-bold text-muted bg-white px-3 py-1 rounded-full border border-default shadow-sm uppercase tracking-wider">
                    Today, {today}
                  </span>
                </div>

                {chatHistory[selectedUser.id]?.length > 0 ? (
                  chatHistory[selectedUser.id].map((msg) => (
                    <div key={msg.id} className="flex flex-col items-end gap-1">
                      <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%] md:max-w-[70%] shadow-sm">
                        <p className="text-xs md:text-sm font-medium leading-relaxed">{msg.text}</p>
                      </div>
                      <span className="text-[9px] text-muted font-medium">{msg.time}</span>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex items-center justify-center">
                     <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">No messages yet</p>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Area */}
              <div className="p-3 md:p-4 border-t border-default bg-white">
                <div className="flex items-center gap-2">
                  <button className="hidden sm:flex text-muted p-2.5 hover:bg-main rounded-lg border border-default transition-all">
                    <FaImage size={18} />
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      className="w-full bg-main border border-default rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:border-primary shadow-inner"
                    />
                  </div>
                  <button
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="bg-primary text-white p-3 md:px-6 md:py-3 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md active:scale-95 disabled:opacity-40"
                  >
                    <span className="hidden md:inline text-sm font-bold">Send</span>
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