import ModelLoader from "../components/ModelLoader.tsx";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin);


const Hero = () => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [index, setIndex] = useState(0);
    const frases = [
        {
            text: "Desenvolvedor Full-Stack",
            textColor: "text-violet-400",
            cursorColor: "bg-violet-400",
            shadow: "drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]"
        },
        {
            text: "Graduando em Ciência da Computação",
            textColor: "text-pink-400",
            cursorColor: "bg-pink-400",
            shadow: "drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]"
        },
        {
            text: "Desenvolvedor de Jogos",
            textColor: "text-emerald-400",
            cursorColor: "bg-emerald-400",
            shadow: "drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]"
        },
        {
            text: "Pesquisador de Aprendizado de Máquina",
            textColor: "text-blue-400",
            cursorColor: "bg-blue-400",
            shadow: "drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        }
    ]

    useEffect(()=> {

        const timeline = gsap.timeline({repeat: -1});

        frases.forEach((frase, i) => {
            timeline.to(textRef.current, {
                duration: 1.5,
                scrambleText: {
                    text: frase.text,
                    chars: "!<>-_\\\\/[]{}—=+*^?#01",
                    speed: 0.5,
                    revealDelay:0.2,
                    tweenLength: true
                },
                onStart: ()=>{
                    setIndex(i)
                }
            })
                .to({}, {duration: 1.5})
                .to(textRef.current, {
                    duration: 1,
                    scrambleText: {
                        text: "",
                        chars: "!<>-_\\/[]{}—=+*^?#01",
                        speed: 0.5,
                        tweenLength: true
                    }
                })
        });

    }, []);

    return (
        <section id="hero" className="relative overflow-hidden w-full min-h-screen flex items-start pt-[12vh] lg:pt-0 lg:items-center bg-black">

            <div className="absolute inset-y-0 right-0 w-full h-full z-0">
                <div className="absolute left-0 lg:left-1/5 top-1/5 md:top-0 inset-y-0 w-full z-10">
                    <ModelLoader />

                </div>
            </div>
            <div className="relative z-10 flex w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 ">

                <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Oi! Eu sou o Mateus
                    </h1>
                    <div className={`${frases[index].shadow} font-mono`}>
                        <span ref={textRef} className={`${frases[index].textColor} text-2xl md:text-3xl max-w-xl mx-auto lg:mx-0 `}>
                        </span>
                        <span className={`inline-block w-2 md:w-3 h-4.5 md:h-6 ${frases[index].cursorColor} animate-pulse transition-all ease-in-out duration-500 align-middle mb-2 ml-2`}
                        ></span>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;