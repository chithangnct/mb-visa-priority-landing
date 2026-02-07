"use client";

import { useState } from "react";
import VideoIntro from "@/components/ui/VideoIntro";

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [introComplete, setIntroComplete] = useState(false);

    return (
        <>
            {!introComplete && (
                <VideoIntro onComplete={() => setIntroComplete(true)} />
            )}
            <div
                style={{
                    opacity: introComplete ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    visibility: introComplete ? "visible" : "hidden",
                }}
            >
                {children}
            </div>
        </>
    );
}
