'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Cylinder, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from "three"
import Secen from './Secen'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const Canva = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen relative rounded-2xl sm:rounded-3xl overflow-hidden">
      <div className="w-full h-screen transparent absolute z-20"></div>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Secen />
        <EffectComposer>
          <Bloom 
            mipmapBlur
            intensity={10.0}
            luminanceThreshold={1}
            luminanceSmoothing={1}
          />
          <ToneMapping adaptive/>
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default Canva