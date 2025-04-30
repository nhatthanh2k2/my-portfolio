import React from 'react'

const ProjectPage = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center bg-white px-4"
        >
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
                    <p className="text-gray-600">Description about your first project.</p>
                </div>
                <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
                    <p className="text-gray-600">Description about your second project.</p>
                </div>
            </div>
        </section>
    )
}

export default ProjectPage
