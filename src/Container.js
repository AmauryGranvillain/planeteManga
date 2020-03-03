import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MangaDetails from './components/mangaDetails';
import MangaItem from './components/mangaItem';
import { getManga } from "./actions/manga";
import { Select } from "antd";

const { Option } = Select;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentManga: [],
            mangaHits: [],
            currentCategory: "Tous",
        }
        this.handleManga = this.handleManga.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleNewList = this.handleNewList.bind(this)
    }

    componentDidMount() {
        if (this.state.currentCategory === "" || this.state.currentCategory === "Tous") {
            getManga().then(data => this.setState({
                mangaHits: data
            }))
        }
    }

    handleManga = manga => {
        this.setState({ currentManga: manga })
    }

    handleCategory = value => {
        this.setState({ currentCategory: value })
    }

    handleNewList = category => {
        let mangaList = this.state.mangaHits
        if (category !== "Tous") {
            mangaList = this.state.mangaHits.filter(u => u.manga.type === category)
        }
        return mangaList.map(({ manga }) => (
            <MangaItem key={manga.name} manga={manga} changeCurrentManga={() => this.handleManga(manga)} />
        ))
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div className="panel-filter">
                        <Select defaultValue={this.state.currentCategory} style={{ width: 90 }} onChange={this.handleCategory}>
                            <Option value="Tous">Tous</Option>
                            <Option value="Shonen">Shonen</Option>
                            <Option value="Seinen">Seinen</Option>
                        </Select>
                    </div>
                    <div className="manga-list">
                        {
                            this.handleNewList(this.state.currentCategory)
                        }
                    </div>
                </Route>
                <Route path="/manga">
                    <MangaDetails manga={this.state.currentManga} />
                </Route>
            </Switch>
        )
    }
}

export default Container;