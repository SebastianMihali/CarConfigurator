'use client'
import {Canvas} from "@react-three/fiber";
import Experience from "@/app/components/Experience";
import ColorsPanel from "@/app/components/ColorsPanel";
import {useState} from "react";
import {gsap} from 'gsap';
import {ColorType} from '@/app/components/ColorsPanel';

export default function Home() {

    const carColor = useState({r: 1, g: 0, b: 0});
    const rimsColor = useState({r: 0.2, g: 0.2, b: 0.2});

    function changeCarColor(color:  ColorType) {
        gsap.to(carColor, {r: color.r, g: color.g, b: color.b, duration: 0.2});
    }

    function changeRimsColor(color: ColorType) {
        gsap.to(rimsColor, {r: color.r, g: color.g, b: color.b, duration: 0.2});
    }

    return (
        <>
            <Canvas>
                <fog attach='fog' args={['#05050a', 10, 20]}></fog>
                <color attach='background' args={['#05050a']}></color>
                <Experience carColor={carColor[0]} rimsColor={rimsColor[0]}></Experience>
            </Canvas>
            <ColorsPanel changeCarColor={changeCarColor} changeRimsColor={changeRimsColor}></ColorsPanel>
        </>
    );
}
