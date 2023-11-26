import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { navLinks } from '../data/index'
import { Link, NavLink } from 'react-router-dom'

export default function NavbarComponent() {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) { //untuk mengatur perubahan background navbar ketika di scroll
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", setChangeColor);
    })

    return (
        <div>
            <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className='fs-3 fw-bold'>Ngoding Course.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-end" >
                            {navLinks.map((link) => {
                                return (
                                    <div className='nav-link' key={link.id}>
                                        <NavLink to={link.path} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        } end>{link.text}</NavLink>
                                    </div>
                                )
                            })}
                        </Nav>

                        <div className='text-end'>
                            <button className='btn btn-outline-danger rounded-1'>Join With Us</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
