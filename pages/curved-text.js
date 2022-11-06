import { transform } from "framer-motion";
import React, { useState } from "react";
import StampTextIcon from "../components/Icons/StampTextIcon";

export default function CurvedText() {
  const [text, setText] = useState("CURVED TEXT");

  return (
    <>
      <section>
        <form>
          <input type="text" onChange={(e) => setText(e.target.value)}></input>
        </form>
      </section>
      <section className="bg-violet min-h-[50vh] absolute bottom-0 left-0 right-0 flex">
        <StampTextIcon text="I KNOW WHAT AM I DOING">
          <img src="/emojis/computer.svg" />
        </StampTextIcon>
        <StampTextIcon
          text="I UNDERSTAND BUSINESS AND TECHNOLOGY"
          rotationOffset={-140}
          angle={9}
          radious={300}
          fontSize={32}
          iconSize={140}
          paddingTop={10}>
          <img src="/emojis/business.svg" />
        </StampTextIcon>
      </section>
    </>
  );
}
