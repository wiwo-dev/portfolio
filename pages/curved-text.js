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
        <StampTextIcon text="TECHNOLOGY & BUSINESS" rotationOffset={-140} style={{ rotate: `${15}deg` }}>
          <img src="/emojis/business.svg" />
        </StampTextIcon>
      </section>
    </>
  );
}
