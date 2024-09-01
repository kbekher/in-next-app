"use client";
import Header from "../components/header";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="h-[100vh] flex justify-start items-start">
        <Spline scene="https://prod.spline.design/liDjqaY-i3BfRC2o/scene.splinecode" />
      </div>
    </div>
  );
}
