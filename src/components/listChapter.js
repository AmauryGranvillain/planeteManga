import React, { useEffect, useState } from 'react';
import { getChapter } from '../actions/manga';

import "../style/listTome.css"
import {object} from "prop-types";

const ListChapter = ({ tome }) => {

    const [chapterHits, setChapterHits] = useState([]);

    useEffect(() =>{
        getChapter().then(data => setChapterHits(data))
    }, []);

    const getChaptertoTome = id => {
        let chapterList = chapterHits
        if (id !== null) {
            chapterList = chapterHits.filter(u => u.chapter.ref_tome === id)
            return chapterList.map(({ chapter }) => (
                <div className="chapter-item" key={chapter.number}>
                    <h4>{chapter.title}</h4>
                    <span className="chapter">Chapitre n° {chapter.number}</span>
                </div>
            ))
        }
    }
    return (
        <div>
            {
                getChaptertoTome(tome.id)
            }
        </div>
    )
}

ListChapter.propTypes = {
    tome: object.isRequired
}

export default ListChapter;