import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { Group } from "three"

useGLTF.preload("/rubik_key.glb")

export default function Model({move}) {
  const group = useRef(null) 
  const { scene } = useGLTF("/rubik_key.glb")


  useEffect(() => {
    
  },[move])
  
  useFrame(() => {
    if (group.current) {
      
      const rotationSpeed = 2 * Math.PI;
      const scrollRotation = move * rotationSpeed;

     
      group.current.rotation.x = scrollRotation;
      group.current.rotation.y = scrollRotation;
      group.current.rotation.z = scrollRotation / 2;
    }
  })

  return (
      <group ref={group}>
        <primitive object={scene} />
      </group>
  )
}




