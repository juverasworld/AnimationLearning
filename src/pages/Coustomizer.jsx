import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config";
import state from "../store";
import { download, logoShirt } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { AIPicker, ColorPicker, Button, FilePicker, Tab } from "../components";

export default function Coustomizer() {
  const snap = useSnapshot(state);
  const [file, setFile] = useState("");
  const [prompt, setPrompt] = useState("");

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [GeneratingImg, setGeneratingImg] = useState(false);

  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
  //   show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker 
        file={file}
        setFile ={setFile}
        readFile ={readFile}
        />;
      case "aipicker":
        return <AIPicker />;
        default:
            return null
    }
  };

  const handleDecals = (type, result)=>{
const decalType = DecalTypes[type];
state[decalType.stateProperty] =result;
if(!activeFilterTab[decalType.filterTab]){
    handleActiveFilterTab(decalType.filterTab)
}
  }
const handleActiveFilterTab = (tabName) =>{
    switch (tabName){
        case "logoShirt":
            state.isLogoTexture = !activeFilterTab[tabName];
            break
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName];
                default:
                    state.isFullTexture = false;
                    state.isLogoTexture =true
    }
}
  const readFile = (type)=>{
    reader(file)
    .then((result)=>{
        handleDecals(type, result);
        setActiveEditorTab("");
    })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            className="absolute top-0 left-0 z-10"
            key="custom"
            {...slideAnimation("left")}
          >
            <div className="flex  items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute z-5 top-5 right-5" {...fadeAnimation}>
            <Button
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <div className="filtertab-container" {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=""
                handleClick={() => {}}
              />
            ))}
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
