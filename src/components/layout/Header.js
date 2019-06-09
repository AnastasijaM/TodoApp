import React from 'react'
import {Link} from 'react-router-dom'

 function Header() {
    return (
        <header style={headerStyle}>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
            <h1>Todo List</h1>

        </header>
    )
}

const headerStyle={
  background:'#333',
  color:'#fff',
  textAlign:'center',
  padding:'10px',
}
const linkStyle={
    color:'#fff', 
    textDecoration:'none'
}
export default Header;