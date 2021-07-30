import React, { Component } from "react"
import axios from 'axios';

import Portfolioitem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super()  
        
        this.state = {
            isLoading: false,
            tituloDePagina: "Bienvenido a mi portafolio",
            data: []
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

    getPortfolioItems() {
        axios
          .get("https://eduardosj.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            console.log("response data", response);
            this.setState({
                data: response.data.portfolio_items
            });
          })
          .catch(error => {
            console.log(error);       
          });
      }

    PortfolioItems () {
        return this.state.data.map(item => {
            return <Portfolioitem key={item.id} title={item.name} url={item.url} slug={item.id}/>;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
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