import React from 'react';
import './navbar.styles.css';

export default class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#home">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#login">ANMELDEN</a></li>
                            <li><a href="#contact">KONTAKT</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#more">MEHR
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#merchandise">Merchandise</a></li>
                                    <li><a href="#extras">Extras</a></li>
                                    <li><a href="#media">Media</a></li>
                                </ul>
                            </li>
                            <li><a href="#search"><span className="glyphicon glyphicon-search"></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );


    }
}