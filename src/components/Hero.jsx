import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white font-bold">
      <div className="px-2 max-w-[800px] mx-auto mt-[-96px] h-screen flex flex-col justify-center items-center text-center gap-3">
        <p className="text-custom_green md:text-2xl sm:text-xl text-sm">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-5xl sm:text-3xl text-2xl">
          Grow with data.
        </h1>
        <p className="md:text-2xl sm:text-xl text-sm">
          Fast, flexible financing for{" "}
          <Typed
            className="text-slate-400"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>
        <p className="md:text-2xl sm:text-xl text-sm text-slate-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-custom_green text-black w-44 py-3 mt-4 rounded-md">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
