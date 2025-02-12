import React, { useState } from 'react';
import bot from '../assets/userchat.png';
import user from '../assets/technokrateBot.png';
import { IoIosAttach } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const ChatWithUs = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus.", sender: "user", time: "06:30 AM" },
    { id: 2, text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus.", sender: "bot", time: "06:31 AM" },
    { id: 3, text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus.", sender: "user", time: "06:32 AM" },
    { id: 4, text: "Lorem ipsum dolor sit amet consectetur. Turpis vivamus pretium ac diam vitae cursus.", sender: "bot", time: "06:33 AM" },
  ]);
  return (
    <div className=' md:mx-[100px] mt-5 '>
      <h1 className='text-[20px] font-semibold md:mb-8 '>Payment Related Issue</h1>
      {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
          >
            <div className="flex items-start  space-x-2">
              {msg.sender === "user" && (
                <img
                  src={user}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="bg-gray-300 p-3 rounded-lg max-w-xs">
                <p className="text-sm text-gray-800">{msg.text}</p>
                <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
              </div>
              {msg.sender === "bot" && (
                <img
                  src={bot}
                  alt="Bot"
                  className="w-8 h-8 rounded-full"
                />
              )}
            </div>
          </div>
        ))}
        <div className='flex space-x-2 items-center'>
          <img src={user} className='w-8 h-8 rounded-full' />
        <p className="text-gray-500 space-x-3 text-sm flex items-center mt-2">Typing...</p>
        </div>
     
        <div className="relative space-x-3 max-w-full mt-6 flex items-center border rounded-lg px-3 py-2 bg-gray-100">
        <span className='absolute z-10 left-3'><CiMail /></span>
        <input
          type="text"
          placeholder="Message"
          className="w-full bg-transparent focus:outline-none px-5"
        />
        <button className="text-gray-500">
          <span className='text-xl'><IoIosAttach /></span>
        </button>
      </div>
    </div>
  )
}

export default ChatWithUs
