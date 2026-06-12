
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html} from "@react-three/drei";
import { EffectComposer, Bloom} from "@react-three/postprocessing";
import ProgrammerModel from "./ProgrammerModel.tsx";

function Loader() {
    return (
        <Html center>
            <div className="text-violet-400 font-mono animate-pulse">Carregando...</div>
        </Html>
    );
}

export default function ModelLoader() {

    return (
        <Canvas camera={{ position: [0, -8,-9], fov: 45 }} gl={{ alpha: false }}>


            <ambientLight intensity={0.1}/>
            <directionalLight intensity={1} position={[0, 0, 0]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} />

            <Suspense fallback={<Loader />}>
                <ProgrammerModel/>
            </Suspense>

            <EffectComposer enableNormalPass>
                <Bloom
                    intensity={1.5}
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.9}
                    mipmapBlur
                />


            </EffectComposer>

        </Canvas>
    );
}