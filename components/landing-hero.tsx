"use client";

import { useAuth } from "@clerk/nextjs"
import TypewriterComponent from "typewriter-effect";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">

                <div className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Discover Today",
                                "Hawaii.",
                                "Paris.",
                                "Australia.",
                                "Monaco.",
                                "Mexico."
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
                <h1> A.I. </h1>
                <h2> Recommendations</h2>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Save Yourself Time and $$$ with Artificial Intelligence.
            </div>
        </div>
    )
}