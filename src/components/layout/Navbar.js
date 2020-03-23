import React from 'react'
import PropTypes from 'prop-types'

const Navbar =({icon, title})=>{
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon} /> {title}
                </h1>
            </nav>
        )
};

/*Incase the props are not passed from the components default props are set, In case props are passed, the passed properties are given perfernce is it overites Defaut props*/
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
};

/*In case the passed props reuired are to be string and insted of passing strings, numbers or array is passed then type match will throw an error in console*/
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
