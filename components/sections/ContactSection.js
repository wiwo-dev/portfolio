import React, { useState } from "react";
import { Button, Heading, MyLink } from "components/ui";
import { Input, Textarea } from "components/ui/form";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkedInIcon } from "components/Icons";

// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function ContactSection({ id }) {
  const [emailSend, setEmailSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    setIsSending(true);
    e.preventDefault();
    console.log("SEND");
    const formData = new FormData(e.target);
    //formData.append("additional", "some value");
    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    console.log(object);
    try {
      const response = await postData("api/sendgrid", object);
      if (response.status === "200") setEmailSend(true);
      else setIsError(true);
      setIsSending(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsSending(false);
    }
  };

  return (
    <section id={id} className=" bg-violet ">
      <div id="CONTACT ME" className="mx-auto max-w-screen-xl px-[32px] py-20 flex flex-col gap-5">
        <div className="flex justify-start">
          <Heading color="black" className="text-white">
            Contact me
          </Heading>
        </div>
        <p className="text-lg lg:text-xl text-white">
          Got a question, proposal, or just want to say hello? Go ahead! 👋
        </p>
        <p className="text-lg lg:text-xl text-white">
          Send me an email to{" "}
          <MyLink className="" href="mailto:wojtekwieclawski@gmail.com?subject=Hello">
            wojtekwieclawski@gmail.com
          </MyLink>
        </p>
        <p className="text-lg lg:text-xl text-white">
          Or contact me through LinkedIn at{" "}
          <MyLink className="" href="https://www.linkedin.com/in/wojciech-wieclawski/">
            Wojciech Wieclawski
          </MyLink>
        </p>
        {/* <div className="relative overflow-hidden">
          <motion.form
            animate={{ x: emailSend || isError ? "100vw" : 0 }}
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              label=""
              required
              placeholder="YOUR NAME"
              className="p-10 rounded-[20px] rounded-tl-[60px] rounded-br-[60px] border-[6px]"></Input>
            <Input
              label=""
              name="email"
              type="email"
              placeholder="EMAIL"
              required
              className="p-10 rounded-[20px] rounded-bl-[60px] rounded-tr-[60px] border-[6px]"></Input>
            <Textarea
              label=""
              name="body"
              type="text"
              required
              placeholder="YOUR MESSAGE"
              className="p-10 rounded-[60px] p-10 border-[6px] min-h-[250px]"></Textarea>
            <div className="flex justify-center">
              <Button type="submit" loading={isSending}>
                send
              </Button>
            </div>
          </motion.form>
          {emailSend && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p className="text-white text-lg font-bold lg:w-[40%] text-center">
                Thank you, your email was sent.
                <br />
                <br />I check my mailbox regularly so please expect my answer very soon.
              </p>
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <p className="text-white text-lg font-bold lg:w-[40%] text-center">
                Sorry, something went wrong.
                <br />
                <br />
                Send me an email to wojtekwieclawski@gmail.com
              </p>
            </motion.div>
          )}
        </div> */}
        {/* <Button onClick={() => setEmailSend((prev) => !prev)}>FAKE SEND</Button>
        {emailSend ? "true" : "false"} */}
      </div>
    </section>
  );
}
