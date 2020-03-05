import React, { Component } from 'react';
import { getTome } from '../actions/manga';

import "../style/listTome.css"

class ListTome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tomeHits: []
        }
    }

    componentDidMount() {
        getTome().then(data => this.setState({
            tomeHits: data
        }))
    }

    getTometoManga(id) {
        let tomeList = this.state.tomeHits
        if (id !== null) {
            tomeList = this.state.tomeHits.filter(u => u.tome.ref_manga === id)
            return tomeList.map(({ tome }) => (
                <div className="tome-item">
                    <h4>{tome.title}</h4>
                    <span className="tome">Tome n° {tome.number}</span>
                    <span className="date">Date de sortie : {tome.date}</span>
                </div>
            ))
        }
    }

    render() {
        return (
            <div>
                {
                    this.getTometoManga(this.props.manga.id)
                }
            </div>
        )
    }
}

export default ListTome;