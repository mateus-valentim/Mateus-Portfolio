import ModelLoader from "../components/ModelLoader.tsx";
import Typewriter from "../components/Typewriter";



const Hero = () => {


    return (
        <section id="hero" className="relative overflow-hidden w-full min-h-screen flex items-start pt-[12vh] lg:pt-0 lg:items-center bg-black">

            <div className="absolute right-0 w-full h-full z-0">
                <div className="absolute left-0 lg:left-1/5 top-1/5 md:top-0 inset-y-0 w-full z-10">
                    <ModelLoader />

                </div>
            </div>
            <div className="relative z-10 flex w-full max-w-7xl mx-auto px-6 lg:px-12 py-0 ">

                <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left z-10">
                    <h1 className="text-3xl md:text-4xl  font-bold text-white mb-6 font-mono">
                        Oi! Eu sou o Mateus
                    </h1>

                    <Typewriter/>
                </div>

            </div>

        </section>
    );
};

export default Hero;