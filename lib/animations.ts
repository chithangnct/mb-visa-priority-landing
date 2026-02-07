import { Variants } from "framer-motion";

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Slide in from left (Masterise-style scroll reveal)
export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Slide in from right (Masterise-style scroll reveal)
export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Fade in from left
export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Fade in from right
export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Scale up
export const scaleUp: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Stagger container
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Stagger item
export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// Card hover
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    hover: {
        scale: 1.02,
        y: -8,
        boxShadow: "0 20px 40px rgba(192, 192, 192, 0.15)",
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

// 3D Card tilt
export const card3DTilt = {
    rest: {
        rotateX: 0,
        rotateY: 0,
    },
    hover: {
        rotateX: -5,
        rotateY: 10,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

// Float animation
export const floatAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

// Glow pulse
export const glowPulse = {
    boxShadow: [
        "0 0 20px rgba(192, 192, 192, 0.1), 0 0 40px rgba(30, 58, 138, 0.2)",
        "0 0 30px rgba(192, 192, 192, 0.2), 0 0 60px rgba(30, 58, 138, 0.3)",
        "0 0 20px rgba(192, 192, 192, 0.1), 0 0 40px rgba(30, 58, 138, 0.2)",
    ],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

// Number counter animation hook helper
export const countUpConfig = {
    duration: 2,
    ease: [0.4, 0, 0.2, 1] as const,
};
