import React from 'react'
import { FloatingNav } from './ui/floating-navbar'

const Navbar = () => {
    const navItems = [
        { name: "Home", link: "/" },
        { name: "Features", link: "#features" },
        { name: "Testimonials", link: "#testimonials" },
    ]
    return (
        <div>
            <FloatingNav navItems={navItems} />
        </div>
    )
}

export default Navbar
