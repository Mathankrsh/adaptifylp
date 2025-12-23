"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Avatar from "boring-avatars";

const voices = [
    { id: "narrator", name: "Narrator", character: "Narrator", colors: ["#60A5FA", "#3B82F6", "#1D4ED8", "#93C5FD", "#DBEAFE"] },
    { id: "holmes", name: "Holmes", character: "Sherlock Holmes", colors: ["#A78BFA", "#8B5CF6", "#7C3AED", "#C4B5FD", "#EDE9FE"] },
    { id: "watson", name: "Watson", character: "Dr. Watson", colors: ["#FB923C", "#F97316", "#EA580C", "#FDBA74", "#FED7AA"] },
];

const script = [
    { voice: "narrator", text: "Mr. Sherlock Holmes, who was usually very late in the mornings, was seated at the breakfast table." },
    { voice: "holmes", text: "You have been in Afghanistan, I perceive." },
    { voice: "watson", text: "How on earth did you know that?" },
    { voice: "holmes", text: "Never mind. The question now is about the murder at Lauriston Gardens." },
    { voice: "narrator", text: "Holmes leaned back in his chair with a dreamy expression on his face." },
];

export function AudioDemo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 0.5;
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        const lineIndex = Math.floor((progress / 100) * script.length);
        if (lineIndex !== currentLine && lineIndex < script.length) {
            setCurrentLine(lineIndex);
        }
    }, [progress, currentLine]);

    const scriptRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (isPlaying && lineRefs.current[currentLine] && scriptRef.current) {
            lineRefs.current[currentLine]?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }, [currentLine, isPlaying]);

    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-[#0A0A0A] text-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-[24px] md:text-[32px] font-normal tracking-[-0.02em] mb-3 md:mb-4">Hear the Difference</h2>
                    <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Every character speaks in their own unique voice. Watch as our AI brings stories to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Script View */}
                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            <div ref={scriptRef} className="h-[280px] md:h-[400px] overflow-y-auto pr-4 space-y-6 md:space-y-8 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]">
                                {script.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        ref={(el) => { lineRefs.current[i] = el; }}
                                        initial={{ opacity: 0.3 }}
                                        animate={{
                                            opacity: i === currentLine ? 1 : 0.3,
                                            scale: i === currentLine ? 1.02 : 1,
                                            x: i === currentLine ? 10 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                                            {voices.find(v => v.id === line.voice)?.character}
                                        </span>
                                        <p className={`text-lg md:text-2xl font-medium leading-relaxed ${i === currentLine ? 'text-white' : 'text-neutral-600'}`}>
                                            "{line.text}"
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                    </div>

                    {/* Player Interface */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900 rounded-2xl md:rounded-[32px] p-6 md:p-12 border border-neutral-800 shadow-2xl relative"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <h4 className="font-medium">A Study in Scarlet</h4>
                                    <p className="text-xs text-neutral-500">Arthur Conan Doyle</p>
                                </div>
                            </div>
                            <Volume2 className="w-5 h-5 text-neutral-500" />
                        </div>

                        {/* Voice Indicators */}
                        <div className="flex justify-between items-center mb-12">
                            {voices.map((voice) => (
                                <div key={voice.id} className="flex flex-col items-center gap-3 group">
                                    <div className={`w-14 h-14 rounded-full ${lineVoice().id === voice.id ? 'opacity-100' : 'opacity-40'} transition-all duration-500`}>
                                        <Avatar
                                            size={56}
                                            name={voice.name}
                                            variant="marble"
                                            colors={voice.colors}
                                        />
                                    </div>
                                    <span className={`text-[10px] font-medium uppercase tracking-widest ${lineVoice().id === voice.id ? 'text-white' : 'text-neutral-600'}`}>
                                        {voice.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-12">
                            <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden relative">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-white"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex justify-between mt-3 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                                <span>0:00</span>
                                <span>3:42</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center gap-8">
                            <SkipBack className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-0.5" />}
                            </button>
                            <SkipForward className="w-6 h-6 text-neutral-500 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );

    function lineVoice() {
        const activeVoiceId = script[currentLine]?.voice;
        return voices.find(v => v.id === activeVoiceId) || voices[0];
    }
}

