import React, {useEffect, useState} from 'react';
import { getTome } from '../actions/manga';
import { Collapse } from 'antd'

import "../style/listTome.css"
import ListChapter from './listChapter';
import {object} from "prop-types";

const { Panel } = Collapse

const ListTome = ({ manga }) => {

    const [tomeHits, setTomeHits] = useState([]);

    useEffect(() =>{
        getTome().then(data => setTomeHits(data))
    }, []);

    const setHeaderPanel = tome => {
        return(
            <div className="tome-item">
                <span className="tome">{tome.number}</span>
                <h4>{tome.title}</h4>
                <span className="date">Date de sortie : {tome.date}</span>
            </div>
        )
    }

    const getTometoManga = id => {
        let tomeList = tomeHits
        if (id !== null) {
            tomeList = tomeHits.filter(u => u.tome.ref_manga === id)
            return tomeList.map(({ tome }) => (
                <Collapse key={tome.number}>
                    <Panel key={tome.number} header={setHeaderPanel(tome)}>
                        <ListChapter tome={tome} />
                    </Panel>
                </Collapse>
            ))
        }
    }

    return (
        <div>
            {
                getTometoManga(manga.id)
            }
        </div>
    )
}

ListTome.propTypes = {
    manga: object.isRequired
}

export default ListTome;