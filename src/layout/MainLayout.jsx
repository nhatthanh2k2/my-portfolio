import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="bg-white px-4">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout
