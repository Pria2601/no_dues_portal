import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Card = ({ number, title, location, time, nodues, popupFunc, activeCard, setActiveCard }) => {
    const isActive = activeCard === number; // Check if this card is active
    const handleClick = () => {
        setActiveCard(isActive ? null : number); // Set active card or unselect
        popupFunc(number, !isActive);
    };

    return (
        <div className="flex items-center space-x-4">
            {nodues === 0 && (
                <div className="flex flex-col items-center">
                    {number !== 1 && <div className="w-1 h-4 bg-[#CBCBCB]"></div>}
                    <span className="bg-[#E3E3E3] w-12 h-20 flex items-center justify-center rounded-full font-bold text-xl">
                        {number}
                    </span>
                    <div className="w-1 flex-1 bg-blue-200 h-6"></div>
                </div>
            )}

            {nodues === 0 && (
                <div className="relative bg-[#E3E3E3] rounded-xl p-6 pr-8 flex justify-between items-center my-3 shadow-md overflow-hidden w-full h-[156px]">
                    <div className="text-left ml-7">
                        <p className="font-semibold text-[#8E8E8E] text-2xl leading-[39px]">{title}</p>
                        <p className="text-[#9D9D9D] text-xl leading-[38px]">{location}</p>
                    </div>
                    <div className="mr-9">
                        <div className="bg-[#6B7B99] text-white w-22 py-2 px-1 rounded-lg text-lg mb-2 ml-12">NO DUES</div>
                        <div className="text-[#9D9D9D] text-xl">{time}</div>
                    </div>
                    <div className="absolute top-0 right-0 h-full w-4 bg-[#6B7B99] rounded-r-xl"></div>
                </div>
            )}

            {nodues !== 0 && (
                <div className="flex flex-col items-center">
                    {number !== 1 && <div className="w-1 h-4 bg-white"></div>}
                    <span
                        className={`w-12 h-20 flex items-center justify-center rounded-full font-bold text-xl cursor-pointer transition-all duration-200 ${
                            isActive ? "bg-[#2164E8] text-white" : "bg-white text-black"
                        }`}
                    >
                        {number}
                    </span>
                    <div className="w-1 flex-1 bg-blue-200 h-6"></div>
                </div>
            )}

            {nodues !== 0 && (
                <div
                    onClick={handleClick}
                    className={`relative rounded-xl p-6 pr-8 flex justify-between items-center my-3 shadow-md overflow-hidden w-full h-[156px] cursor-pointer transition-all duration-200 ${
                        isActive ? "bg-[#2164E8] text-white" : "bg-white text-black"
                    }`}
                >
                    <div className="text-left ml-7">
                        <p className={`font-semibold text-2xl leading-[39px] ${isActive ? "text-white" : "text-black"}`}>
                            {title}
                        </p>
                        <p className={`text-xl leading-[38px] ${isActive ? "text-white" : "text-[#9D9D9D]"}`}>
                            {location}
                        </p>
                    </div>
                    <div className="mr-9">
                        <div className={`w-22 py-2 px-1 rounded-lg text-2xl mb-2 ml-[96px] ${isActive ? "text-white" : "text-green-500"}`}>
                            ₹ {nodues}
                        </div>
                        <div className={`text-xl ${isActive ? "text-white" : "text-[#9D9D9D]"}`}>{time}</div>
                    </div>
                    <div className={`absolute top-0 right-0 h-full w-4 rounded-r-xl ${isActive ? "bg-[#3DA5D9]" : "bg-[#2364AA]"}`}></div>
                </div>
            )}
        </div>
    );
};

export default Card;

  
  
  
  
  
  