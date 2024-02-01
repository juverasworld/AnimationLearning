import {motion, AnimatePresence} from "framer-motion";
import state from "../store";
import {useSnapshot} from "valtio";
import {
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation

} from "../config/motion"
import { Button } from "../components";
export default function Home(){
    const snap = useSnapshot(state);
    return(

    <AnimatePresence>
        {snap.intro &&(
       <motion.section className="home"
       {...slideAnimation("left") }
       >
<motion.header {...slideAnimation("down")}>
<img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
</motion.header>
<motion.div className="home-content" {...headContainerAnimation}>
    <motion.div className="" {...headTextAnimation}>
<h1 className="head-text">Let'S <br className="xl:flex hidden" /> DO IT</h1>
    </motion.div>
<motion.div className="flex flex-col gap-5" {...headContentAnimation}>
<p className="max-w-md font-normal text-gray-600 text-base ">
    Create your unique and exclusive shirt with our brand-new 3D customization tool.
    <strong className="">Unleash your imagination</strong>
    and define your own style
</p>
<Button
type="filled"
title= "Customize It"
handleClick={()=> state.intro =false}
customStyle="w-fit px-4 py-2.5 font-bold text-sm" 
/>

</motion.div>
</motion.div>
       </motion.section>
        )}
    </AnimatePresence>
    )
}