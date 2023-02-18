import React from "react";
import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Pricing() {
  return (
    <div className="w-full py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <Card avatar={Single} title="Single" />
        <Card avatar={Double} title="Double" />
        <Card avatar={Triple} title="Triple" />
      </div>
    </div>
  );
}

export default Pricing;
