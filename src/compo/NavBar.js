import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class NavBar extends Component {

    render(props) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">News Update</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item pe-auto" to="/" key="1">General</Link></li>
                                    <li><Link className="dropdown-item pe-auto" to="/business" key="2">Business</Link></li>
                                    <li><Link className="dropdown-item pe-auto" to="/entertainment" key="3">Entertainment</Link></li>
                                    <li><Link className="dropdown-item pe-auto" to="/health" key="4">Health</Link></li>
                                    <li><Link className="dropdown-item pe-auto" to="/science" key="5">Science</Link></li>
                                    <li><Link className="dropdown-item pe-auto" to="/sports" key="6">Sports</Link></li>
                                    <li><Link className="dropdown-item pe-auto" to="/technology" key="7">Technology</Link></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <a className="d-flex text-light" href="https://www.instagram.com/_mr_patel_333/" target="_blank" style={{textDecoration:"none"}}>
                            <h4 className="m-0" style={{fontWeight:"400"}}>RUSHIT PATEL</h4>
                            <i class="fa fa-user-circle-o" aria-hidden="true" style={{fontSize:"1.7rem", marginLeft:".5rem"}}></i>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
