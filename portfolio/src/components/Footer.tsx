import React from "react";

export default function Footer() {
    return (
        <footer className="relative mt-24">
            {/* Curved top edge */}
            <div
                className="absolute -top-6 w-full h-10 bg-slate-900"
                style={{
                    maskImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 30' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M0,0 L0,30 L1200,30 L1200,0 Q600,30 0,0 Z' fill='black'/></svg>")`,
                    WebkitMaskImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 30' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M0,0 L0,30 L1200,30 L1200,0 C600,40 200,10 0,0 Z' fill='black'/></svg>")`,
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                }}
            />

            <div className="bg-slate-900 pt-20 pb-12 border-t border-slate-700 paper-slate shadow-deep">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-10">
                    {/* Left */}
                    <div className="text-left">
                        <h2 className="font-bold text-5xl uppercase mb-3 text-white font-marker tracking-wider">
                            Shreya Gupta
                        </h2>
                        <p className="font-mono font-bold text-sm bg-safety-orange text-white inline-block px-3 py-1 rotate-1 shadow-sm">
                            Engineering scalable systems &amp; AI solutions.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-end gap-6 w-full md:w-auto">
                        <div className="flex gap-4">
                            <a
                                className="w-12 h-12 flex items-center justify-center border-2 border-slate-600 rounded-full hover:bg-electric-blue hover:text-slate-900 hover:border-electric-blue transition-all"
                                href="mailto:shreyagupta.ggn@gmail.com"
                                aria-label="Email"
                            >
                                <span className="material-symbols-outlined">email</span>
                            </a>
                            <a
                                className="w-12 h-12 flex items-center justify-center border-2 border-slate-600 rounded-full hover:bg-electric-blue hover:text-slate-900 hover:border-electric-blue transition-all font-mono font-bold text-xl"
                                href="https://linkedin.com/in/shreya-gupta"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                in
                            </a>
                            <a
                                className="w-12 h-12 flex items-center justify-center border-2 border-slate-600 rounded-full hover:bg-electric-blue hover:text-slate-900 hover:border-electric-blue transition-all font-mono font-bold text-xl"
                                href="https://github.com/techieshreya"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                Gh
                            </a>
                        </div>
                        <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                            © 2025. System Status: Nominal.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
