'use client'

import {useRef, useState} from "react";
import ColorButton from "@/app/components/ColorButton";

export type ColorType = {
    r: number,
    g: number,
    b: number
}

type ColorPanelProps ={
    changeCarColor:(color:ColorType)=>void,
    changeRimsColor:(color: ColorType)=>void,
}

export default function ColorsPanel(props:ColorPanelProps){

    const [panelOpen,setPanelOpen]=useState(true)

    const carButtonsColor = ['bg-red-500','bg-neutral-900','bg-blue-700','bg-neutral-300']
    const carColors = [
        {r:1,g:0,b:0},
        {r:0.05,g:0.05,b:0.05},
        {r:0,g:0,b:1},
        {r:1,g:1,b:1}]
    const [activeCarColor, setActiveCarColor] = useState([true,false,false,false]);

    const rimsButtonsColor = ['bg-neutral-600','bg-neutral-900','bg-neutral-50']
    const rimsColors=[
        {r:0.2,g:0.2,b:0.2},
        {r:0,g:0,b:0},
        {r:1,g:1,b:1}
    ]
    const [activeRimsColor, setActiveTireColor] = useState([true,false,false]);

    function changePanelVisibility(){
        setPanelOpen(!panelOpen);
        console.log(panelOpen)
    }

    function onCarColorClick(index:number){
        const newButtonsState = [...activeCarColor];
        for(let i =0;i<newButtonsState.length;i++){
            newButtonsState[i]=false;
            if(i==index)
                newButtonsState[i]=true;

        }
        setActiveCarColor(newButtonsState)
        props.changeCarColor(carColors[index]);
    }

    function onRimsColorClick(index:number){
        const newButtonsState = [...activeRimsColor];
        for(let i =0;i<newButtonsState.length;i++){
            newButtonsState[i]=false;
            if(i==index)
                newButtonsState[i]=true;

        }
        setActiveTireColor(newButtonsState)
        props.changeRimsColor(rimsColors[index]);
    }

    return (
        <div className={"absolute top-0 right-0 bottom-0 left-0 pointer-events-none z-10 flex overflow-hidden"}>
            <div className={"m-auto mr-2 transition-transform flex mb-4 sm:mb-auto " + (panelOpen?"":"panel-hidden")}>
                <div
                    className={"text-white my-auto p-2 py-4 pointer-events-auto panel rounded-tl-2xl rounded-bl-2xl fill-white"}
                    onClick={changePanelVisibility}>
                    {panelOpen ?
                        <svg className={"w-6 h-6"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g data-name="Layer 2">
                                    <g data-name="arrow-ios-forward">
                                        <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect>
                                        <path
                                            d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg> :
                        <svg className={"w-6 h-6"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g data-name="Layer 2">
                                    <g data-name="arrow-ios-back">
                                        <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect>
                                        <path
                                            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>}

                </div>
                <div className={"rounded-2xl py-5 panel flex-col pointer-events-auto"}>
                    <span className={"text-white ml-4"}>Car color:</span>
                    <div className={"flex mt-4"}>
                        {carButtonsColor.map((color, index) => {
                            return (<ColorButton key={'colorButton_' + index} color={color} active={activeCarColor}
                                                 callback={onCarColorClick} index={index}></ColorButton>)
                        })}
                    </div>
                    <span className={"text-white mt-4 ml-4"}>Rims color:</span>
                    <div className={"flex my-4"}>
                        {rimsButtonsColor.map((color, index) => {
                            return (<ColorButton key={'colorButton_' + index} color={color} active={activeRimsColor}
                                                 callback={onRimsColorClick} index={index}></ColorButton>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}