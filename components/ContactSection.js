import React, { useState } from "react";
import Button from "ui/Button";
import { Input, Textarea } from "ui/form";
import Heading from "ui/Heading";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SEND");
    const formData = new FormData(e.target);
    //formData.append("additional", "some value");
    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    console.log(object);
  };

  return (
    <section className=" bg-violet ">
      <div id="CONTACT ME" className="mx-auto max-w-screen-xl px-[32px] py-20">
        <div className="py-10 flex justify-center">
          <Heading color="black" className="text-white">
            Contact me
          </Heading>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            label=""
            placeholder="YOUR NAME"
            className="p-10 rounded-[20px] rounded-tl-[60px] rounded-br-[60px] border-[6px]"></Input>
          <Input
            label=""
            name="email"
            type="email"
            placeholder="EMAIL"
            className="p-10 rounded-[20px] rounded-bl-[60px] rounded-tr-[60px] border-[6px]"></Input>
          <Textarea
            label=""
            name="body"
            type="text"
            placeholder="YOUR MESSAGE"
            className="rounded-[60px] p-10 border-[6px]"></Textarea>
          <div className="flex justify-center">
            <Button type="submit">send</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
