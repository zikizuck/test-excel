import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router";

import CreatePost from "../../CreatePost/CreatePost";
import 'bootstrap/dist/css/bootstrap.css';


class Header extends Component {
    constructor(props) {
        super(props);

    }
    formatDate(dateStr) {
        const date = new Date(dateStr);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return months[date.getMonth()] + ' ' + date.getDate()+ ' '+ date.getFullYear();
    };

    render() {
        return (

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">DS inventory</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Parts <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </nav>

        );
    }
}

export default Header;