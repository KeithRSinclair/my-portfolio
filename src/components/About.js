import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import bgImage from "../logo/clouds.svg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0])).catch(console.error);
    }, []);

    if (!author) {
        return <div>Loading...</div>
    }

    return (<main>
        <img src={bgImage} alt="endless clouds" className="absolute w-full" style={{ backgroundColor: "#708090", opacity: 0.1, }} />
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 font-serif text-center" style={{ textShadow: "#000 2px 2px 3px" }}>About Me</h1>
        <div className="p-10 lg:pt-10 container mx-auto relative">
            <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20" >
                <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                <div className="text-lg flex flex-col justify-center">
                    <h2 className="text-4xl sm:text-6xl text-white mb-4 pr-3 text-center" style={{ textShadow: "#000 2px 2px 3px" }} ><span>{author.name}</span></h2>
                    <div>
                        <BlockContent blocks={author.bio} projectId="wm77me1p" dataset="production" />
                    </div>
                </div>
            </section>
        </div>

    </main>)
};