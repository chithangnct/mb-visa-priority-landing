"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";

interface TextMorphProps {
    children: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "span" | "p";
    /** Delay before animation starts (seconds) */
    delay?: number;
    /** Duration per character morph (seconds) */
    charDuration?: number;
    /** Stagger between each character (seconds) */
    stagger?: number;
    /** Only animate once */
    once?: boolean;
    /** Animate immediately (for hero, no scroll trigger) */
    immediate?: boolean;
}

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.15,
        y: 6,
    },
    visible: (custom: { duration: number; delay: number }) => ({
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        y: 0,
        transition: {
            duration: custom.duration,
            delay: custom.delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
    // Instant reveal for already-seen text
    revealed: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        y: 0,
        transition: { duration: 0 },
    },
};

export default function TextMorph({
    children,
    className = "",
    as: Tag = "h2",
    delay = 0,
    charDuration = 0.5,
    stagger = 0.04,
    once = false,
    immediate = false,
}: TextMorphProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });
    const [hasRevealed, setHasRevealed] = useState(false);
    const shouldAnimate = immediate || isInView;

    // Track if text was already revealed
    useEffect(() => {
        if (shouldAnimate && !hasRevealed) {
            setHasRevealed(true);
        }
    }, [shouldAnimate, hasRevealed]);

    // Determine animation state
    const getAnimateState = () => {
        if (shouldAnimate) return hasRevealed && !isInView ? "revealed" : "visible";
        if (hasRevealed) return "revealed";
        return "hidden";
    };

    // Split text into individual characters, preserving spaces
    const chars = useMemo(() => {
        return children.split("").map((char, index) => ({
            char,
            key: `${char}-${index}`,
            isSpace: char === " ",
        }));
    }, [children]);

    return (
        <Tag style={{ display: "block" }}>
            <span ref={ref} style={{ display: "inline" }} aria-label={children}>
                {chars.map((item, index) => {
                    if (item.isSpace) {
                        return (
                            <span key={item.key} style={{ display: "inline" }}>
                                &nbsp;
                            </span>
                        );
                    }

                    return (
                        <motion.span
                            key={item.key}
                            className={className}
                            custom={{
                                duration: charDuration,
                                delay: delay + index * stagger,
                            }}
                            variants={charVariants}
                            initial={hasRevealed ? "revealed" : "hidden"}
                            animate={getAnimateState()}
                            style={{
                                display: "inline-block",
                                padding: "0.15em 0.02em",
                                margin: "-0.15em -0.02em",
                                willChange: "transform, opacity, filter",
                            }}
                        >
                            {item.char}
                        </motion.span>
                    );
                })}
            </span>
        </Tag>
    );
}

/**
 * TextMorphInline - for inline segments within a heading
 * e.g. <h2>Đặc quyền <TextMorphInline className="text-gradient-silver">vượt trội</TextMorphInline></h2>
 */
interface TextMorphInlineProps {
    children: string;
    className?: string;
    delay?: number;
    charDuration?: number;
    stagger?: number;
    once?: boolean;
    immediate?: boolean;
    /** Pass true if parent already controls visibility */
    parentInView?: boolean;
}

export function TextMorphInline({
    children,
    className = "",
    delay = 0,
    charDuration = 0.45,
    stagger = 0.035,
    once = false,
    immediate = false,
    parentInView,
}: TextMorphInlineProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, margin: "-80px" });
    const [hasRevealed, setHasRevealed] = useState(false);
    const shouldAnimate = immediate || parentInView || isInView;

    // Track if text was already revealed
    useEffect(() => {
        if (shouldAnimate && !hasRevealed) {
            setHasRevealed(true);
        }
    }, [shouldAnimate, hasRevealed]);

    // Determine animation state
    const getAnimateState = () => {
        if (shouldAnimate) return hasRevealed && !isInView && !parentInView ? "revealed" : "visible";
        if (hasRevealed) return "revealed";
        return "hidden";
    };

    const chars = useMemo(() => {
        return children.split("").map((char, index) => ({
            char,
            key: `${char}-${index}`,
            isSpace: char === " ",
        }));
    }, [children]);

    return (
        <span ref={ref} style={{ display: "inline" }} aria-label={children}>
            {chars.map((item, index) => {
                if (item.isSpace) {
                    return (
                        <span key={item.key} style={{ display: "inline" }}>
                            &nbsp;
                        </span>
                    );
                }

                return (
                    <motion.span
                        key={item.key}
                        className={className}
                        custom={{
                            duration: charDuration,
                            delay: delay + index * stagger,
                        }}
                        variants={charVariants}
                        initial={hasRevealed ? "revealed" : "hidden"}
                        animate={getAnimateState()}
                        style={{
                            display: "inline-block",
                            padding: "0.15em 0.02em",
                            margin: "-0.15em -0.02em",
                            willChange: "transform, opacity, filter",
                        }}
                    >
                        {item.char}
                    </motion.span>
                );
            })}
        </span>
    );
}
