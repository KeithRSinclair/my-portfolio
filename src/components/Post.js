import React, { useState, useEffect } from "react";
import bgImage from "../logo/circuit.svg";
import sanityClient from "../client";
import { Link } from "react-router-dom";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{_id,url}, alt}
        }`).then((data) => setPost(data)).catch(console.error)
    }, []);
    return (<main>
        <img src={bgImage} alt="circuit board" className="absolute object-cover w-full h-full" style={{ backgroundColor: "#708090", opacity: 0.1, }} />
        <section>
            <h1 className="text-4xl font-bold text-blue-900 font-serif text-center" style={{ textShadow: "#000 2px 2px 3px" }}>My Blogs</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-blue" key={index}>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded object-cover absolute" />
                                <span className="block relative h-full flex justify-center items-end pr-4 pb-4">
                                    <h3 className="text-lg text-white font-bold bg-blue-900 rounded p-2 justify-center hover:bg-green-900 hover:text-black">{post.title}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    </main>)
};