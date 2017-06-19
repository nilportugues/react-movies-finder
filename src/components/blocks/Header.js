import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse" style={{borderRadius: 0}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to="/" exact>Movies Finder</NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/upcoming">Upcoming Movies</Link>
                            </li>
                            <li>
                                <Link to="/series">Popular Series</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;