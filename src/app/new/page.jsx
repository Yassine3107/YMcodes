'use client'

import dynamic from "next/dynamic";
import HomePage from "@/components/components/body/HomePage";
import Navbar from "@/components/components/general/Navbar";
import Who from "@/components/components/who/Who";
import Skills from "@/components/components/skills/Skills";
import Projects from "@/components/components/projects/Projects";
import Contact from "@/components/components/contact/Contact";
import { useSelector } from "react-redux";

const Scene = dynamic(() => import("@/components/new/Scene"), { ssr: false });
const ScrollFrame = dynamic(() => import("@/components/components/body/ScrollFrame"), { ssr: false });


export default function Home() {
  const cord = useSelector((state) => state.menu.move);

  return (
<div className="relative w-full h-full overflow-x-hidden overflow-y-hidden">
      <Navbar cord={cord}/>
       <main className="flex flex-col mt-10">
       
      <div className="">
        <Scene move={cord} className="absolute inset-0 z-0"/>
        <HomePage cord={cord} />
        <ScrollFrame/>
        <Who cord={cord}/>
        <Skills cord={cord}/>   
        <Projects cord={cord}/>
        <Contact cord={cord}/>
      </div>
    </main>
    </div>
   
  );
}
