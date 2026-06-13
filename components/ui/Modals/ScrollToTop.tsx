"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollTop = window.scrollY;

            // Show / Hide Button
            setIsVisible(scrollTop > 100);

            // Scroll Progress
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / docHeight) * 100;

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const radius = 26;
    const strokeWidth = 4;
    const normalizedRadius = radius - strokeWidth;
    const circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset =
        circumference - (scrollProgress / 100) * circumference;

    return (
        <div
            className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
                }`}
        >
            <button
                onClick={scrollToTop}
                className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black text-white shadow-lg"
            >
                {/* Progress Circle */}
                <svg
                    height={radius * 2}
                    width={radius * 2}
                    className="absolute rotate-[-90deg]"
                >
                    {/* Background */}
                    <circle
                        stroke="#333"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />

                    {/* Progress */}
                    <circle
                        stroke="#f6d73bff"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        style={{
                            transition: "stroke-dashoffset 0.2s ease",
                        }}
                    />
                </svg>

                {/* Arrow */}
                <span className="text-xl font-bold">↑</span>
            </button>
        </div>
    );
};

export default ScrollToTop;