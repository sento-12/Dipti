import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import {  useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



const Secen = () => {
  
  const [img, setimg] = useState("./tanu.png")
 
    let tex = useTexture(img)

    let cyl = useRef(null)

    useFrame((s , b)=>{
        cyl.current.rotation.y += b
    })
  return (
    <group rotation={[0, 1.4, .3]} >
    <mesh ref={cyl} >
        <cylinderGeometry args={[2.5, 2.5, 2.5, 60, 60, true]} />
        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
      </mesh>
      </group>
  )
}

export default Secen