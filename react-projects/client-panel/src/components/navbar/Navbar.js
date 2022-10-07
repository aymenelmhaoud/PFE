import React from 'react'
import PropTypes from 'prop-types'


 const Navbar=(props)=> {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <a className="navbar-brand" href="#">{props.title}</a>
          
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                  
                </ul>
             
        
        </nav>
       
    )
}
Navbar.proptype = {
    title: PropTypes.number.isRequired
}
export default Navbar; 