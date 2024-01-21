import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer>
                <ul className="footer__categories">
                    <li><Link to="/posts/categories/Nails">Nails</Link></li>
                    <li><Link to="/posts/categories/Cake">Cake</Link></li>
                    <li><Link to="/posts/categories/Art">Art</Link></li>
                    <li><Link to="/posts/categories/Flowers">Flowers</Link></li>
                </ul>
                <div className="footer__copyright">
                    <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer
