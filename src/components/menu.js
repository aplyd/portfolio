import React from 'react'
import { Link } from 'gatsby'

const menu = () => {
    return (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to="/">Home</Link></li>
                <li href="#about">About</li>
                <li href="#projects">Projects</li>
                <li href="#resources">Resources</li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            
        </div>
    )
}

export default menu;
