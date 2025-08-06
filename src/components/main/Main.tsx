"use client";
import React, { useState, useRef, useEffect } from "react";

import { FaPlus } from "react-icons/fa6";
import { HiMicrophone } from "react-icons/hi2";
import { IoMdSend } from "react-icons/io";

const Main = () => {
  const [enteredPrompt, setEnteredPrompt] = useState("");

  return (
    <div className="relative flex w-full flex-1 flex-col">
      <div className="mb-4 flex w-full justify-between p-4">
        <p className="text-2xl text-gray-500">Gemini</p>
        <p className="size-4 items-center justify-center rounded-full bg-gray-400 p-4"></p>
      </div>
      <div className="absolute bottom-10 left-1/2 w-2/3 -translate-x-1/2">
        <div className="mb-2 flex-col justify-between rounded-3xl border border-gray-300 px-1 py-4">
          <div className="flex h-30 w-full flex-col-reverse overflow-hidden">
            <textarea
              className="scrollbar-hide w-full flex-grow resize-none overflow-y-auto p-4 outline-none"
              rows={1}
              placeholder="Ask Gemini"
              value={enteredPrompt}
              onChange={(e) => setEnteredPrompt(e.target.value)}
            ></textarea>
          </div>

          <div>
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-x-4 text-sm text-gray-600">
                <span className="cursor-pointer p-2 hover:rounded-full hover:bg-gray-200">
                  <FaPlus />
                </span>
                <p>
                  <span>Deep Research</span>
                </p>
                <p>
                  <span>Canvas</span>
                </p>
                <p>
                  <span>Image</span>
                </p>
              </div>
              <div className="cursor-pointer rounded-full bg-gray-100 p-2 hover:bg-gray-300">
                {enteredPrompt.trim().length > 1 ? (
                  <IoMdSend />
                ) : (
                  <HiMicrophone />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-sm text-gray-500">
            Gemini can make mistakes, so double-check it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
