import React from 'react'
import Button from 'elements/Button'
import BrandIcon from 'parts/iconText'

export default function Header(props) {
    const getNavlinkClass = path =>{
    return props.location.pathname === path ? " active" : "";}
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon/>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNavlinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                Home
                            </Button>
                        </li>
                        <li className={`nav-item${getNavlinkClass("/about-me")}`}>
                            <Button className="nav-link" type="link" href="/about-me">
                                About ME
                            </Button>
                        </li>
                        <li className={`nav-item${getNavlinkClass("/fortfolio")}`}>
                            <Button className="nav-link" type="link" href="/fortfolio">
                                Fortfolio
                            </Button>
                        </li>
                        <li className={`nav-item${getNavlinkClass("/contact")}`}>
                            <Button className="nav-link" type="link" href="/contact">
                                Contact
                            </Button>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    )
}
