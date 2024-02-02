 import { easing } from "maath"
 import { useFrame } from "@react-three/fiber"
 import { useRef } from "react"
 import { AccumulativeShadows, RandomizedLight } from "@react-three/drei"
 export default function Backdrop(){
    const shadows = useRef()
    return(
      <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      >
        <RandomizedLight
        // amount={4}

        />
      </AccumulativeShadows>
    )
 }