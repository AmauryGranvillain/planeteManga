import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import MangaDetails from './components/mangaDetails';
import MangaItem from './components/mangaItem';
import { getManga } from "./actions/manga";
import FilterBlock from "./components/filterBlock";

 const Container  = () => {

    const [currentManga, setCurrentManga] = useState({});
    const [mangaHits, setMangaHits] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("All");

    useEffect(() => {
        if (currentCategory === "" || currentCategory === "All") {
            getManga().then(data => setMangaHits(data))
        }
    }, [currentCategory]);

    const handleCategory = value => {
        setCurrentCategory(value)
    };

    const handleNewListCategory = category => {
        let mangaList = mangaHits
        if (category !== "All") {
            mangaList = mangaHits.filter(u => u.manga.type === category)
        }
        return mangaList.map(({ manga }) => (
            <MangaItem key={manga.name} manga={manga} changeCurrentManga={() => setCurrentManga(manga)} />
        ))
    };

        return (
            <Switch>
                <Route exact path="/">
                    <FilterBlock currentCategory={currentCategory}
                        mangaHits={mangaHits}
                        changeCurrentCategory={(value) => handleCategory(value)}
                        changeCurrentManga={setCurrentManga} />
                    <div className="manga-list">
                        {
                            handleNewListCategory(currentCategory)
                        }
                    </div>
                </Route>
                <Route path="/manga">
                    <MangaDetails manga={currentManga} />
                </Route>
            </Switch>
        )
    }

export default Container;