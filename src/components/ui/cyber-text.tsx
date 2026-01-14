"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CyberTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function CyberText({ text, className = "", delay = 0 }: CyberTextProps) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let iteration = 0;
        let timer: any = null;

        const startScramble = () => {
            timer = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) return text[index];
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(timer);
                }

                iteration += 1 / 3;
            }, 30);
        };

        const timeout = setTimeout(startScramble, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
        };
    }, [text, delay]);

    return (
        <span className={`${className} font-mono uppercase tracking-widest`}>
            {displayText}
        </span>
    );
}
