import { useState } from "react"
import { Link } from "react-router-dom"
import './header.scss'

const Header = () => {
    
    const [isVisibleMenu, setIsVisibleMenu] = useState(false)

    const toggleMenu = () => {
        setIsVisibleMenu(!isVisibleMenu)
    }

    return (
        <div className="navigation-wrap">
            <nav className="main-navigation">
                <Link to="/" className="logo" >My Blog</Link>
                <div className="right-nav-wrap">
                    <div className="search-wrap">
                        <input type="search" placeholder="Search" />
                    </div>
                    <div className={`nav-link-wrap ${isVisibleMenu ? 'visible' : ''}`}>
                        <Link to="/link1" className="page">Link 1</Link>
                        <Link to="/link2" className="page">Link 1</Link>
                        <Link to="/link3" className="page">Link 1</Link>
                        <Link to="/my-profile" className="page">My profile</Link>
                        <Link to="/logout" className="page">Logout</Link>
                    </div>
                    <div className="bars" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav >
        </div>
    )
}

export default Header