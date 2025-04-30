import React from 'react'

const ContactPage = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4"
        >
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-gray-700 mb-4">Feel free to reach out to me via email!</p>
            <a
                href="mailto:your.email@example.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
                Send Email
            </a>
        </section>
    )
}

export default ContactPage
