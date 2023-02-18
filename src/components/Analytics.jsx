import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto py-10" src={Laptop} alt="/" />
        <div className="flex flex-col gap-4 justify-center items-start">
          <p className="text-custom_green font-bold md:text-2xl sm:text-xl text-lg">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-2xl text-xl">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            quibusdam vero saepe voluptas, temporibus fugiat vel accusantium
            aspernatur aut nostrum veniam? Deserunt reprehenderit iste sint unde
            quia incidunt sit nihil!
          </p>
          <button className="text-custom_green bg-black w-32 py-2 rounded-md">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
