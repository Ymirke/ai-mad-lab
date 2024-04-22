import React, { useState } from "react";
import { Vortex } from "../components/vortex";
import toast from "react-hot-toast";

export default function VortexDemoSecond() {
  const [email, setEmail] = useState("");

  async function sumbit() {
    fetch(
      "https://discord.com/api/webhooks/1231957955679883284/x_-cRWyTuzXZHtLjx58NBWqLlGClJfgPvYP0FfSZI5MMH7c0Tma5S5krDk4nnp6m0mxY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: email,
        }),
      }
    );

    toast.success("Submitted");
    setEmail("");
  }

  return (
    <div className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          AI summit
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Next AI summit soon. Get notified:
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@x.com"
            className="px-4 py-2 rounded-lg"
          ></input>
          <button
            onClick={sumbit}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Add to waitlist
          </button>
        </div>
      </Vortex>
    </div>
  );
}
