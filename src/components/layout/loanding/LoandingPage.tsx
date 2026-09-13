"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WalletCards } from "lucide-react";

export default function LoadingPage() {
    const [isVisible, setIsVisible] = useState(true);
    const [isLaunching, setIsLaunching] = useState(false);

    useEffect(() => {
        let exitTimer: ReturnType<typeof setTimeout> | null = null;

        const startExit = () => {
            setIsLaunching(true);

            exitTimer = setTimeout(() => {
                setIsVisible(false);
            }, 700);
        };

        const minimumTimer = setTimeout(() => {
            if (document.readyState === "complete") {
                startExit();
            } else {
                window.addEventListener("load", startExit, { once: true });
            }
        }, 900);

        return () => {
            clearTimeout(minimumTimer);

            if (exitTimer) {
                clearTimeout(exitTimer);
            }

            window.removeEventListener("load", startExit);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isLaunching ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-9999 flex min-h-dvh items-center justify-center overflow-hidden bg-white"
                >
                    <div className="pointer-events-none absolute left-1/2 top-1/2 size-90 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primarylight/15 blur-[120px] sm:size-130" />

                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: isLaunching ? 0 : 1, y: isLaunching ? -10 : 0, scale: isLaunching ? 0.98 : 1 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <motion.div
                            animate={{ rotate: [0, 8, 0], y: [0, -4, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            className="flex size-16 items-center justify-center rounded-2xl border border-primarylight/40 bg-primarylight/10 text-primary shadow-[0_16px_40px_rgba(52,211,153,0.18)] sm:size-20"
                        >
                            <WalletCards size={30} strokeWidth={1.8} className="sm:size-9" />
                        </motion.div>

                        <div className="mt-5 flex items-center">
                            <span className="text-2xl font-semibold tracking-[-0.045em] text-background-soft sm:text-3xl">
                                Spend
                            </span>

                            <span className="text-2xl font-semibold tracking-[-0.045em] text-primary sm:text-3xl">
                                wise
                            </span>
                        </div>

                        <p className="mt-2 text-xs font-medium tracking-wide text-muted sm:text-sm">
                            Organizando sua experiência financeira
                        </p>

                        <div className="mt-7 h-1 w-40 overflow-hidden rounded-full bg-primarylight/15 sm:w-48">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                className="h-full w-1/2 rounded-full bg-primary"
                            />
                        </div>

                        <div className="mt-4 flex items-center gap-1.5">
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="size-1.5 rounded-full bg-primary" />
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay: 0.2, repeat: Infinity }} className="size-1.5 rounded-full bg-primary" />
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay: 0.4, repeat: Infinity }} className="size-1.5 rounded-full bg-primary" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}