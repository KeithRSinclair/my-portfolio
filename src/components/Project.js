import React, { useEffect, useState } from "react";
import sanityClient from "../client";


export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            mainImage,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);

    return (<main >
        <section>
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 font-serif text-center pt-5" >My Projects</h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-green-700"><a href={project.link} alt={project.title} target="_blank" rel="noreferrer" >{project.title}</a></h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span><strong className="font-bold">Framework:</strong>{" "}{project.place}</span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a href={project.link} alt={project.title} target="_blank" rel="noreferrer" className="text-blue-700 font-bold hover:underline hover:text-green-700"><span role="img" aria-label="right pointer">➡</span> {" "}View Project </a>
                        </div>
                    </article>


                ))}
            </section>
        </section>
    </main>)
};