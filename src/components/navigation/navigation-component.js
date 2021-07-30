import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }



    render() {
        return(
            <div>
                <NavLink exact to="/"> 
                    Inicio
                </NavLink>

                <NavLink to="/sobre-mi">Acerca de mi</NavLink>
                <NavLink to="/contacto">contacto</NavLink>
                <NavLink to="/blogs">mis blogs</NavLink>

                {false ? <button>Add Blog</button> : null}
            </div>
        )
    }
}