import React from "react";

function EmojiIconCircle({ children = "💻", size = "100" }) {
  return (
    <div
      className="border-8 border-black rounded-full p-5 bg-white inline-block text-4xl w-[100px] h-[100px] flex justify-center items-center"
      style={{ width: `${size}px`, height: `${size}px`, fontSize: size / 2 }}>
      {children}
    </div>
  );
}

export default EmojiIconCircle;
