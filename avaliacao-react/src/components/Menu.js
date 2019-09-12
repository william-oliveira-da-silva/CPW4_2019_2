import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

export default class Banner extends Component {
    render() {
        return ( 
            <div className="banner">
                <span id="titulo">
                    <Link to="/home">Will</Link>
                </span>
                <ul id="menu"> 
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/bio">Bio</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
