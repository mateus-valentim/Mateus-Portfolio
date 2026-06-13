import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrambleTextPlugin} from "gsap/ScrambleTextPlugin"


gsap.registerPlugin(ScrambleTextPlugin);

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

export default function Typewriter() {
    const textRef = useRef<HTMLSpanElement>(null);
    const [index, setIndex] = useState(0);
    const char = "<>\\\\/[]{}+*^?01"

    useEffect(()=> {

        const timeline = gsap.timeline({onComplete: function() {
                this.play("inicioDoLoop");
            }});



        timeline.to(textRef.current, {
            duration: 1.5,
            scrambleText: {
                text: frases[0].text,
                chars: char,
                speed: 0.5,
                revealDelay:0.2,
                tweenLength: true
            },
            onStart: ()=>{
                setIndex(0)
            }
        })
        .to({}, {duration: 1.5}).addLabel("inicioDoLoop");


        for(let i = 1; i<frases.length; i++){
            timeline.to(textRef.current, {
                duration: 1.5,
                scrambleText: {
                    text: frases[i].text,
                    chars: char,
                    speed: 0.5,
                    revealDelay:0.2,
                    tweenLength: true
                },
                onStart: ()=>{
                    setIndex(i)
                }
            })
                .to({}, {duration: 1.5})
        }

        timeline.to(textRef.current, {
            duration: 1.5,
            scrambleText: {
                text: frases[0].text,
                chars: char,
                speed: 0.5,
                revealDelay:0.2,
                tweenLength: true
            },
            onStart: ()=>{
                setIndex(0)
            }
        })
            .to({}, {duration: 1.5})


        return () => {
            timeline.kill();
        };

    }, []);

    return(
        <div className={`${frases[index].shadow} typewriter`}>
                        <span ref={textRef} className={`${frases[index].textColor} text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 `}>
                        </span>
            <span className={`inline-block w-2 md:w-3 h-4.5 md:h-6 ${frases[index].cursorColor} animate-pulse transition-all ease-in-out duration-500 align-middle mb-2 ml-2`}
            ></span>
        </div>
    )
}