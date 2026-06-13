import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Navbar() {
    const navRef= useRef<HTMLElement>(null);
    const logoRef= useRef<HTMLElement>(null);
    const navlinks = [
        {
            title: "Início",
            id: "home",
        },
        {
            title: "Experiência",
            id: "experience",
        },
        {
            title: "Projetos",
            id: "projects",
        },
        {
            title: "Contato",
            id: "contact",
        }
    ]

    const colors=["bg-violet-400", "bg-pink-400", "bg-emerald-400", "bg-blue-400"]


    useGSAP(() =>{

        gsap.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 2,
            delay: 0.5,
            ease: "power3.out",
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: navRef.current,
                start: 'top -100',
                toggleActions: 'play none none reverse'
            }
        });

        const matchmedia = gsap.matchMedia()
        matchmedia.add({
            isDesktop: "(min-width: 769px)",
            isMobile: "(max-width: 768px)"
        }, (context) => {
            const { isDesktop, isMobile } = (context.conditions || {}) as {
                isDesktop: boolean;
                isMobile: boolean;
            };

            if(isDesktop){


                timeline.fromTo(navRef.current, {backgroundColor: 'transparent', backdropFilter: 'blur(0px)', borderBottom: '1px solid rgba(255,255,255,0)',},
                    {
                        backgroundColor: '#00000050',
                        backdropFilter: 'blur(10px)',
                        duration: 1,
                        ease: 'power1.inOut',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                    });
            }else if(isMobile){
                gsap.fromTo(navRef.current, {backgroundColor: 'transparent', backdropFilter: 'blur(0px)', borderBottom: '1px solid rgba(255,255,255,0)',},
                    {
                        backgroundColor: '#00000050',
                        backdropFilter: 'blur(10px)',
                        duration: 1,
                        ease: 'power1.inOut',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                    });


                timeline.fromTo(logoRef.current, {opacity: 0},
                    {

                        duration: 1,
                        opacity: 1
                    });
            }
        })


    })


    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:px-6 py-5 mx-auto max-w-7xl">
                <a href="#home" className="flex items-center gap-2 font-mono justify-center sm:justify-start drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] text-lg md:text-xl">
                    <p >Mateus_Valentim</p>
                    <div className="h-2.5 w-2.5 rounded-4xl bg-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] animate-pulse duration-500 transition-all "></div>
                </a>

                <ul className="flex flex-row justify-center gap-4 sm:gap-10 sm:justify-end typewriter">

                    {navlinks.map((link, i) => (
                        <li key={link.id} className="relative text-base md:text-lg">
                            <a href={`#${link.id}`} className="group">
                                {link.title}
                                <span className={`absolute ${colors[i]} h-[2px] w-full rounded-xl left-0 bottom-0 origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500`}></span>
                            </a>

                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    )
}