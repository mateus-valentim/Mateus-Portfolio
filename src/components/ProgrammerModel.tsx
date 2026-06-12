import { useGLTF } from "@react-three/drei";

export default function ProgrammerModel() {

    const { scene } = useGLTF("/model/lost_programmer.glb");

    return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
}