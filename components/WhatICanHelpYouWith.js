import React from "react";
import Heading from "ui/Heading";

export default function WhatICanHelpYouWith() {
  return (
    <section className="min-h-screen bg-yellow py-[64px]">
      <div className="max-w-screen-2xl mx-auto px-[32px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[20px]">
        <Heading>What I can help you with</Heading>
      </div>
    </section>
  );
}
