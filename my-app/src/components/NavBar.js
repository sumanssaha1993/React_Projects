import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function NavBar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.modeType} bg-${prop.modeType}`}>
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/favicon-96x96.png" alt="" style ={{width: 30, height:30}}/>
          </a>
          <a className="navbar-brand" href="/">{prop.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">{prop.menu1}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">{prop.menu2}</Link>
                    </li>
                </ul>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" onClick={prop.toggleMode} id="flexSwitchCheckDefault"/>
                  <label className={`form-check-label text-${prop.modeType === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault" >Switch to dark mode</label>
                </div>
          </div>
        </div>
    </nav>
  )
}


NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    menu1: PropTypes.string,
    menu2: PropTypes.string
}

NavBar.defaultProps = {
    title: "Set title here",
    menu1: "Set Menu1 here",
    menu2: "Set Menu2 here"
}
