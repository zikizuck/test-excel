import React, {Component} from 'react';
import CreatePost from "../../CreatePost/CreatePost";

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
                        {/*<ul className="navbar-nav mr-auto mt-2 mt-lg-0">*/}
                        {/*    <li className="nav-item active">*/}
                        {/*        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link" href="#">Link</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link disabled" href="#" tabIndex="-1"*/}
                        {/*           aria-disabled="true">Disabled</a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

                        {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search"/>*/}
                        {/*        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                        {/*</form>*/}
                    </div>
                </nav>

        );
    }
}

export default Header;