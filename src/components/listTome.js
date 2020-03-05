import React, { Component } from 'react';
import { getTome } from '../actions/manga';
import { Collapse } from 'antd'

import "../style/listTome.css"
import ListChapter from './listChapter';

const { Panel } = Collapse

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
                <Collapse>
                    <Panel header={<div className="tome-item">
                        <h4>{tome.title}</h4>
                        <span className="tome">Tome n° {tome.number}</span>
                        <span className="date">Date de sortie : {tome.date}</span>
                    </div>}>
                        <ListChapter tome={tome} />
                    </Panel>
                </Collapse>
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