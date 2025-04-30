import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center bg-white px-4"
            >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="max-w-2xl text-center text-gray-700">
                    I'm an IT student with a strong passion for web development. I love creating
                    beautiful and functional websites using modern technologies like React and
                    TailwindCSS.
                </p>
            </section>

            {/* Skills Section */}
            <section
                id="skills"
                className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4"
            >
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-700">
                    <li>HTML</li>
                    <li>CSS / Tailwind</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>Git/GitHub</li>
                    <li>Firebase</li>
                </ul>
            </section>
        </div>
    )
}

export default AboutPage
