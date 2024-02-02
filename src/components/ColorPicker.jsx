import React from "react"
import  {SketchPicker} from "react-color"
import {useSnapshot} from "valtio"
import state from "../store"

export default function ColorPicker(){
    const snap = useSnapshot(state);
    return(
        <div className="absolute left-full ml-3">
      <SketchPicker
      color= {snap.color}
      disableAlpha
      presetColors={
      [  "#0000000", "#fff", "#ff0000", "#00ff00"
    ]
      }
      onChange={(color)=> state.color = color.hex  }
      />
        </div>
    )
}