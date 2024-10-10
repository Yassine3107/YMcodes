import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { Group } from "three"

useGLTF.preload("/rubik_key.glb")

export default function Model({move}) {
  const group = useRef(null) // Reference to the group containing the 3D object
  const { nodes, materials, animations, scene } = useGLTF("/rubik_key.glb")
  const { actions, clips } = useAnimations(animations, scene)
  const scroll = useScroll()
  const [rotation, setRotation] = useState();

  useEffect(() => {
    console.log(move)
  },[move])
  // Control rotation manually using useFrame
  useFrame(() => {
    if (group.current) {
      // Rotate based on scroll, mouse, or any other input.
      // Adjust the values here to set rotation speed and direction
      const rotationSpeed = 2 * Math.PI; // Adjust the multiplier to control speed
      const scrollRotation = move * rotationSpeed;

      // Apply rotation to all axes (x, y, z) if needed
      group.current.rotation.x = scrollRotation;
      group.current.rotation.y = scrollRotation;
      group.current.rotation.z = scrollRotation / 2; // Optional, adjust as needed
    }
  })

  return (
      <group ref={group}>
        <primitive object={scene} />
      </group>
  )
}




