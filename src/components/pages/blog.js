import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return(
        <div>
            <h2>Blog</h2>

            <div>
                <Link to="sobre-mi">conoce mas sobre mi</Link>
                <Link to="contaco">contactame</Link>
            </div>
        </div>

    );
}