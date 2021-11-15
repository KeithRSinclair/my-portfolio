import React from "react";
import bgImage from "../logo/cogs.svg"

export default function Home() {
    return (
        <main >
            <img src={bgImage} alt="floating cogs" className="absolute object-cover w-full h-full" style={{ backgroundColor: "#708090", opacity: 0.1, }} />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-24 px-8" >
                <h1 className="sm:text-6xl text-4xl font-bold text-blue-900 font-serif" style={{ textShadow: "#000 2px 2px 3px" }}>Welcome to My Portfolio App!</h1>
            </section>
        </main>
    )
};
