import { useState } from "react";

export default function CreditsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-50 font-mono">
            <div className="relative flex flex-col items-end">
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden mb-2 bg-[#00000080] backdrop-blur-md border border-white/20 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 border-transparent"
                    }`}
                >
                    <div className="p-4 text-xs text-gray-300 md:text-sm max-w-[280px] md:max-w-sm text-right">
                        <p>
                            <a
                                href="https://skfb.ly/6wpGP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-violet-400 hover:text-violet-300 hover:underline transition-colors"
                            >
                                "Lost Programmer"
                            </a>{" "}
                            by rivaiamin is licensed under{" "}
                            <a
                                href="http://creativecommons.org/licenses/by-nd/4.0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-violet-400 hover:text-violet-300 hover:underline transition-colors"
                            >
                                Creative Commons Attribution-NoDerivs
                            </a>.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm text-gray-400 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full hover:text-white hover:border-violet-400/50 hover:shadow-[0_0_10px_rgba(167,139,250,0.2)] transition-all duration-300"
                >
                    <span>Créditos do Modelo 3D</span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-violet-400" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}