import React from 'react';

export default function(props) {
    return (
        <div>
            <h2>Detalles de portafoiio para {props.match.params.slug}</h2>
        </div>
    )
}