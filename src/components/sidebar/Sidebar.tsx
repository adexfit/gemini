"use client";
import React, { useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import Image from "next/image";
import { RiSettings2Line } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { on } from "events";
// import { AiContext } from "../../context/AiContext";

const Sidebar = () => {
  // const [extended, setExtended] = useState(false);
  const [keepExtended, setkeepExtended] = useState(false);
  //   const {
  //     setInputedText,
  //     setWelcome,
  //     settextAreaText,
  //     setDetectedLang,
  //     setTranslated,
  //   } = useContext(AiContext);

  // const handleToggle = () => {
  //   setExtended((prev) => {
  //     return !prev;
  //   });
  // };

  const handleNew = () => {
    // setWelcome(true);
    // setInputedText("");
    // settextAreaText("");
    // setTranslated("");
    // setDetectedLang([]);
  };

  const handleKeepExtended = () => {
    setkeepExtended((prev) => {
      return !prev;
    });
  };

  //   onMouseEnter={() =>
  //   !keepExtended ? setExtended(true) : setExtended(false)
  // }
  // onMouseOut={() => (keepExtended ? setExtended(true) : setExtended(false))}

  return (
    <div
      className={`inline-flex h-screen flex-col justify-between bg-[#f1faff] pt-5 pb-5 pl-6 ${keepExtended ? "w-64" : "w-20"}`}
    >
      <div className="pr-5">
        <div className="mb-10 flex items-center justify-between">
          <span onClick={handleKeepExtended} className="cursor-pointer">
            <FiMenu className="size-4 cursor-pointer text-gray-900" />
          </span>
          {keepExtended && (
            <MdOutlineSearch className="size-5 cursor-pointer text-gray-600" />
          )}
        </div>

        <div className="flex items-center gap-x-6" onClick={handleNew}>
          <p>
            <FiEdit className="size-4 cursor-pointer text-gray-600" />
          </p>
          {keepExtended ? (
            <p className="text-sm text-gray-500">New chat</p>
          ) : (
            ""
          )}
        </div>
        {keepExtended ? (
          <div className="recent">
            <p className="recent-title"></p>
            {/* <div className="recent-entry">
              <p>What is react ...</p>
            </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="bottom">
        <div className="flex cursor-pointer items-center gap-x-6">
          <p>
            <RiSettings2Line className="size-4" />
          </p>
          {keepExtended ? (
            <p className="text-sm text-gray-600">Settings and help</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
