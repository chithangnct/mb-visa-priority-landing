"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INTRO_DURATION = 7.5; // video seconds to play (at 2x speed = ~3.75s real time)

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [fadeOut, setFadeOut] = useState(false);

    const handleEnd = useCallback(() => {
        if (fadeOut) return;
        setFadeOut(true);
        // Wait for fade-out animation to finish before calling onComplete
        setTimeout(() => {
            onComplete();
        }, 800);
    }, [fadeOut, onComplete]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Stop at INTRO_DURATION seconds
        const onTimeUpdate = () => {
            if (video.currentTime >= INTRO_DURATION) {
                video.pause();
                handleEnd();
            }
        };

        video.addEventListener("timeupdate", onTimeUpdate);
        video.addEventListener("ended", handleEnd);

        // Fallback: if video fails to load or play, skip intro after timeout
        const fallbackTimer = setTimeout(() => {
            handleEnd();
        }, (INTRO_DURATION + 2) * 1000);

        // Play at 2x speed
        video.playbackRate = 2;
        video.play().catch(() => {
            // Autoplay blocked - skip intro
            handleEnd();
        });

        return () => {
            video.removeEventListener("timeupdate", onTimeUpdate);
            video.removeEventListener("ended", handleEnd);
            clearTimeout(fallbackTimer);
        };
    }, [handleEnd]);

    return (
        <AnimatePresence>
            {!fadeOut ? (
                <motion.div
                    key="video-intro"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <video
                        ref={videoRef}
                        src="/videos/intro.mp4"
                        muted
                        playsInline
                        preload="auto"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </motion.div>
            ) : (
                <motion.div
                    key="video-intro-fade"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "#000",
                        pointerEvents: "none",
                    }}
                />
            )}
        </AnimatePresence>
    );
}
