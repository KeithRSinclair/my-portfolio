import React from "react";
import bgImage from "../logo/cogs.svg"

export default function Home() {
    return (
        <main >
            <img src={bgImage} alt="floating cogs" className="absolute object-cover w-full h-full" style={{ backgroundColor: "#708090", opacity: 0.1, }} />
            <section className="pt-12 lg:pt-24 px-8" >
                <h1 className="sm:text-6xl text-4xl font-bold text-blue-900 font-serif" style={{ textShadow: "#000 2px 2px 3px" }}>Welcome to My Portfolio App!</h1>
                <div className="py-6 lg:py-12 px-4 text-white rounded-lg bg-black bg-opacity-25 font-bold">
                    <p>Here I showcase all the technologies I've learnt and share my thoughts on these, via my Blogs page. To see what I've built using code check out my Projects page. If you would like to contact me, you can click on the Whats App icon in the far right of the header or if you prefer to communicate via E-mail click on the contact me tab and fill in the relative information and I'll get back to you as soon as possible.</p>
                </div>
            </section>
        </main>
    )
};
