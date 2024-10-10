'use client'

import dynamic from "next/dynamic";
import HomePage from "@/components/components/body/HomePage";
import { useState } from 'react';
import Navbar from "@/components/components/general/Navbar";
import Who from "@/components/components/who/Who";
import Skills from "@/components/components/skills/Skills";
import Projects from "@/components/components/projects/Projects";

const Scene = dynamic(() => import("@/components/new/Scene"), { ssr: false });
const ScrollFrame = dynamic(() => import("@/components/components/body/ScrollFrame"), { ssr: false });


export default function Home() {
  const [cord, setCord] = useState(0.0);

  const handleScrollChange = (newScrollValue) => {
    setCord(newScrollValue);
  };

  return (
    <main className="flex flex-col mt-10">
      <div className="">
        <Scene move={cord} className="absolute inset-0 z-0"/>
        <HomePage  />
        <ScrollFrame onScrollChange={handleScrollChange} />
        <Who cord={cord}/>
        <Skills cord={cord}/>   
        <Projects cord={cord}/>
      </div>
    </main>
  );
}
