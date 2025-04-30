import React from 'react'
import { Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import MainLayout from '../layout/MainLayout'
import ProjectPage from '../pages/ProjectPage'

export const routes = [
    {
        path: '/',
        element: <Navigate to="/portfolio/home" replace />,
    },
    {
        path: '/portfolio',
        element: <MainLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'about-me',
                element: <AboutPage />,
            },
            {
                path: 'project',
                element: <ProjectPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
]
