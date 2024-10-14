"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene({move}) {
  return (
    <Canvas gl={{ antialias: true, version:"webgl1" }} dpr={[1, 1.5]} className="absolute inset-0 myway">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Model move={move}/>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}