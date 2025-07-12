import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import {  useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Secen = () => {
  
  const [img, setimg] = useState("./photo/dipti5.png")
  const [cylinderSize, setCylinderSize] = useState(2.5)
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCylinderSize(1.8) // Mobile
      } else if (window.innerWidth < 1024) {
        setCylinderSize(2.2) // Tablet
      } else {
        setCylinderSize(2.5) // Desktop
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
 
  let tex = useTexture(img)
  let cyl = useRef(null)

  useFrame((s , b)=>{
    cyl.current.rotation.y += b
  })
  
  return (
    <group rotation={[0, 1.4, .3]} >
      <mesh ref={cyl} >
        <cylinderGeometry args={[cylinderSize, cylinderSize, cylinderSize, 60, 60, true]} />
        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default Secen