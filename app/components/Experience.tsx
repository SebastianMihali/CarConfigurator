'use client'

import {MeshReflectorMaterial, PresentationControls, Stage} from "@react-three/drei";
import Car from "@/app/components/Car";
import {ColorType} from "@/app/components/ColorsPanel";

type ExperiencePros = {
    carColor: ColorType,
    rimsColor:ColorType
}

export default function Experience(props:ExperiencePros) {

    return (

        <PresentationControls
        speed={1.5}
        global={true}
        zoom={0.7}
        polar={[-0.1,Math.PI/4]}
        >
            <Stage environment={"city"} intensity={1} shadows={false} >
                <Car carColor={props.carColor} rimsColor={props.rimsColor}></Car>
            </Stage>
            <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.7,0]}>
                <planeGeometry args={[170,170]}></planeGeometry>
                <MeshReflectorMaterial
                    blur={[100,100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                    mirror={0}
                ></MeshReflectorMaterial>
            </mesh>
        </PresentationControls>

    );
}