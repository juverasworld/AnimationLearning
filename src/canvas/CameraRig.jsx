import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {easing} from "maath";
import { useSnapshot } from "valtio";

import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

export default function CameraRig({children}){
    const group = useRef( ); 
const snap = useSnapshot(state)
useFrame((state, delta)=>{

    const isBreakPoint = window.innerWidth <=1260
    const isMobile = window.innerWidth <=600;
    // 
    // set the model smoothly
    easing.dampE(
        group.current.rotation,
        [state.pointer.y/10, -state.pointer.x/5, 0],
        0.25,
        delta
    ) 
})

    return(
     <group ref={group}>
        {children}
     </group>
    )
 }