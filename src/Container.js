import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MangaDetails from './components/mangaDetails';
import MangaItem from './components/mangaItem';
import { getManga } from "./actions/manga";
import { Select, AutoComplete, Input } from "antd";

const { Option } = Select;

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentManga: [],
            mangaHits: [],
            currentCategory: "Tous",
            currentSearch: "",
            options: [],
        }
        this.handleManga = this.handleManga.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
        this.handleNewListCategory = this.handleNewListCategory.bind(this)
    }
    componentDidMount() {
        if (this.state.currentCategory === "" || this.state.currentCategory === "Tous") {
            getManga().then(data => this.setState({
                mangaHits: data
            }))
        }
    }

    handleManga = manga => {
        if (manga) {
            this.setState({ currentManga: manga })
        }
    }

    handleCategory = value => {
        if (value) {
            this.setState({ currentCategory: value })
        }
    }

    handleSearch = value => {
        if (value) {
            this.setState({ currentSearch: value })
        }
        this.handleNewListName(value)
    }
    handleNewListName = name => {
        let mangaList = this.state.mangaHits
        if (name !== "") {
            mangaList = this.state.mangaHits.filter(u => u.manga.name.includes(name)).map((item) => {
                return {
                    value: item.manga.name,
                    label: (
                        <div key={item.manga.name}>
                            <span>{item.manga.name}</span>
                        </div>
                    )
                }
            })
        }
        this.setState({ options: mangaList })
        console.log(this.state.options)
    }
    handleNewListCategory = category => {
        let mangaList = this.state.mangaHits
        if (category !== "Tous") {
            mangaList = this.state.mangaHits.filter(u => u.manga.type === category)
        }
        return mangaList.map(({ manga }) => (
            <MangaItem key={manga.name} manga={manga} changeCurrentManga={() => this.handleManga(manga)} />
        ))
    }

    render() {
        const options = [
            {
                label: 'Manga',
                options: this.state.options,
            },
        ];
        return (
            <Switch>
                <Route exact path="/">
                    <div className="panel-filter">
                        <AutoComplete
                            dropdownClassName="certain-category-search-dropdown"
                            dropdownMatchSelectWidth={500}
                            style={{ width: 250 }}
                            onSearch={this.handleSearch}
                            options={options}
                        >
                            <Input.Search size="large" placeholder="chercher un manga" />
                        </AutoComplete>
                        <Select defaultValue={this.state.currentCategory} style={{ width: 90 }} onChange={this.handleCategory}>
                            <Option value="Tous">Tous</Option>
                            <Option value="Shonen">Shonen</Option>
                            <Option value="Seinen">Seinen</Option>
                        </Select>
                    </div>
                    <div className="manga-list">
                        {
                            this.handleNewListCategory(this.state.currentCategory)
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