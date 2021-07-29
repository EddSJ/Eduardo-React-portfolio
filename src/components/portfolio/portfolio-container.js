import React, { Component } from "react"

import Portfolioitem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super()  
        
        this.state = {
            isLoading: false,
            tituloDePagina: "Bienvenido a mi portafolio",
            data: [
                {titulo: "quip", familia: "Flores", slug: "quip"},
                {titulo: "eventbride", familia: "Sanchez", slug: 'eventbrite'},
                {titulo: "ministry safe", familia: "SF", slug: 'ministry-safe'},
                {titulo: "swingway", familia: "SF", slug: 'swingway'}
            ]
        };
        // this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter = (filter) => {
        this.setState({
            data: this.state.data.filter(apellido => {
                return apellido.familia === filter;
            })
        })
    }

    PortfolioItems () {
        const data = this.data;

        return this.state.data.map(item => {
            return <Portfolioitem title={item.titulo} url={"google.com"} slug={item.slug}/>;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Cargando...</div>
        }
        return (
            <div>
                <h2>{this.state.tituloDePagina}</h2>

                <button onClick={() => this.handleFilter("Sanchez")}>Sanchez</button>
                <button onClick={() => this.handleFilter("Flores")}>Flores</button>
                <button onClick={() => this.handleFilter("SF")}>SF</button>

                {this.PortfolioItems()}

            </div>
        )
    }
}