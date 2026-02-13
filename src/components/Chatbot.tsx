"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

/** Extract plain text from a UIMessage's parts array */
function getMessageText(parts: Array<{ type: string; text?: string }>): string {
    return parts
        .filter((p) => p.type === "text" && p.text)
        .map((p) => p.text)
        .join("");
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    const { messages, sendMessage, status, error } = useChat();

    const isLoading = status === "submitted" || status === "streaming";

    // Auto-scroll on new messages
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    function handleSend(text?: string) {
        const msg = text ?? inputValue.trim();
        if (!msg || isLoading) return;
        sendMessage({ text: msg });
        setInputValue("");
    }

    return (
        <>
            {/* Floating button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-blueprint-dark border-2 border-electric-blue/40 rounded-full flex items-center justify-center shadow-deep hover:scale-110 transition-transform"
                aria-label="Open AI chat"
            >
                <span className="material-symbols-outlined text-electric-blue text-2xl">
                    {isOpen ? "close" : "smart_toy"}
                </span>
            </button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-[100] w-80 md:w-96 glass-terminal flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-700 flex items-center gap-3">
                            <span
                                className={`w-2 h-2 rounded-full ${isLoading
                                    ? "bg-amber-code animate-pulse shadow-[0_0_6px_#FFBF00]"
                                    : "bg-neon-green animate-pulse shadow-[0_0_6px_#39FF14]"
                                    }`}
                            />
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-electric-blue">
                                Portfolio Agent {isLoading && "· thinking…"}
                            </span>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 max-h-72 overflow-y-auto p-4 space-y-3 bg-slate-950/90 font-mono text-sm"
                        >
                            {messages.length === 0 && !error && (
                                <div className="space-y-2">
                                    <p className="text-slate-500 text-xs">
                                        Ask me anything about Shreya&apos;s projects, experience, or
                                        tech stack…
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            "How did Shreya build LedgerLock?",
                                            "What's her AI experience?",
                                            "Tech stack overview",
                                        ].map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => handleSend(q)}
                                                className="text-[10px] px-2 py-1 border border-slate-600 rounded text-electric-blue hover:bg-slate-800 transition-colors text-left"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="p-2 border border-red-500/30 rounded bg-red-500/10 text-red-400 text-xs">
                                    <p className="font-bold mb-1">&gt; [ERROR]</p>
                                    <p>
                                        Failed to connect to AI agent. Make sure{" "}
                                        <code className="text-amber-code">GOOGLE_GENERATIVE_AI_API_KEY</code> is
                                        set in your{" "}
                                        <code className="text-amber-code">.env.local</code> file.
                                    </p>
                                </div>
                            )}

                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`${msg.role === "user"
                                        ? "text-electric-blue"
                                        : "text-neon-green/80"
                                        }`}
                                >
                                    <span className="text-slate-500 text-xs">
                                        {msg.role === "user" ? "you" : "agent"}:{" "}
                                    </span>
                                    <span className="whitespace-pre-wrap">
                                        {getMessageText(msg.parts as Array<{ type: string; text?: string }>)}
                                    </span>
                                </div>
                            ))}

                            {isLoading &&
                                messages.length > 0 &&
                                messages[messages.length - 1]?.role === "user" && (
                                    <div className="text-neon-green/60 text-xs flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
                                        Processing query…
                                    </div>
                                )}
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="p-3 border-t border-slate-700 bg-slate-900/90 flex gap-2"
                        >
                            <input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a question…"
                                disabled={isLoading}
                                className="flex-1 bg-slate-800 text-white text-sm px-3 py-2 rounded font-mono border border-slate-600 focus:outline-none focus:border-electric-blue placeholder-slate-500 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputValue.trim()}
                                className="bg-safety-orange text-white px-3 py-2 rounded font-bold text-sm hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:hover:bg-safety-orange"
                            >
                                <span className="material-symbols-outlined text-lg">send</span>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
