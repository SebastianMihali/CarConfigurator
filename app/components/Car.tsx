'use client'

import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {ColorType} from "@/app/components/ColorsPanel";

type CarProps ={
    carColor:ColorType,
    rimsColor:ColorType
}

export default function Car(props:CarProps){
    const gltf = useLoader(GLTFLoader,'/models/car.glb')

    gltf.scene.remove(gltf.nodes['terrain']);

    // @ts-ignore
    gltf.materials['black paint'].color = props.carColor;
    // @ts-ignore
    gltf.materials['rims'].color = props.rimsColor;

    return(
        <group {...props}>
            <primitive object={gltf.scene}></primitive>
        </group>
    );
}