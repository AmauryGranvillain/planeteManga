import React from 'react';
import './mangaItem.css'
const MangaItem = ({ entries }) => (
    <div className="manga-list">
        {
            entries.map(({id, title, author, date, category}) => (
                <div className={`manga-item ${id}`}>
                    <h3>{title}</h3>
                    <div className="infosup">
                        <span>{author}</span>
                        <span>{date}</span>
                        <span>{category}</span>
                    </div>
                </div>
            ))
        }
    </div>
)


export default MangaItem

export const LIST_MANGA = [
    {id: 1, title: "One Piece", author: "Eiichirõ Oda", date: "22/07/1997", category: "Shõnen"},
    {id: 2, title: "Dragon ball", author: "Toriyama Akira", date: "20/11/1984", category: "Shõnen"},
    {id: 4, title: "Naruto", author: "Masashi Kishimoto", date: "20/09/1999", category: "Shõnen"},
    {id: 2, title: "Berserk", author: "Kentarõ Miura", date: "1989", category: "Seinen"},
]