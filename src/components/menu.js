"use strict"
import React, {PropTypes} from 'react';
import { Badge } from 'react-bootstrap';

export default class Menu extends React.Component {
    render() {
        let badge = this.props.cartItemsNumber > 0 ? (<span className="badge badge-pill badge-primary">{this.props.cartItemsNumber}</span>) : ('');



        console.log(this.props,'props');
        return (


            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border border-info border-top-0 border-left-0 border-right-0">
                <a className="navbar-brand" href="/">React Cart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">About</a>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/admin">Admin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">Cart {badge}</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        );
    }
}

Menu.propTypes = {
};
