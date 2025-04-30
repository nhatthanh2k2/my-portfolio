import React from 'react'
import HeroSection from '../ui/HeroSection'
import AboutPage from './AboutPage'
import SkillsPage from './ProjectPage'
import ContactPage from './ContactPage'

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeroSection />
            <AboutPage />
            <SkillsPage />
            <ContactPage />
        </div>
    )
}

export default HomePage
