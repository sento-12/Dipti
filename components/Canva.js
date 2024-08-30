'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Cylinder, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from "three"
import Secen from './Secen'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const Canva = () => {
  
  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen  relative rounded-3xl">
      <div className="w-full h-screen transparent absolute z-20 "></div>
    <Canvas >
      <OrbitControls/>
      <ambientLight />
      <Secen  />
      <EffectComposer>

      <Bloom 
      mipmapBlur
    intensity={10.0} // The bloom intensity.
    luminanceThreshold={1} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
    />
    <ToneMapping adaptive/>
    </EffectComposer>
    </Canvas>
    </div>
  )
}

export default Canva