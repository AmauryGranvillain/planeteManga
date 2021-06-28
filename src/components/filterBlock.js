import React, { useState } from 'react';
import { AutoComplete, Input, Select } from 'antd'
import '../style/filterBlock.css';
import { Link } from 'react-router-dom';
import { array, func, string } from "prop-types";

const { Option } = Select;

const FilterBlock = ({ currentCategory, mangaHits, changeCurrentCategory, changeCurrentManga }) => {

    const [optionsSearch, setOptionsSearch] = useState([{ value: 'pas de résultats', label: <span>Pas de résultats</span> }]);

    const handleSearch = results => {
        handleNewListName(results)
    }

    const handleChange = manga => {
        changeCurrentManga(manga)
    }
    const handleNewListName = name => {
        let mangaList = mangaHits
        name = name.toLowerCase()
        mangaList = mangaList.filter(u => u.manga.name.toLowerCase().includes(name)).map((item, index) => {
            return {
                key: index,
                value: item.manga.name,
                label: (
                    <Link to={"/manga/" + item.manga.name.toLowerCase()} onClick={() => handleChange(item.manga)}>
                        <div className="option-search" key={item.manga.name}>
                            <img src={"/" + item.manga.japan.logo} alt={"cover " + item.manga.name} />
                            <p className="title">{item.manga.name}</p>
                            {(item.manga.isFinished)
                                ? <p className="status" style={{ color: "#37B357" }}>Terminé</p>
                                : <p className="status" style={{ color: "#ef323a" }}>En cours</p>}
                        </div>
                    </Link>
                )
            }
        })
        setOptionsSearch(mangaList)
    }
    const handleCategory = value => {
        changeCurrentCategory(value)
    }

    return (
        <div className="panel-filter">
            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{ width: 250 }}
                onSearch={handleSearch}
                options={optionsSearch}
            >
                <Input.Search size="large" placeholder="chercher un manga" />
            </AutoComplete>
            <Select defaultValue={currentCategory} style={{ width: 90 }} onChange={handleCategory}>
                <Option value="All">Tous</Option>
                <Option value="Shonen">Shonen</Option>
                <Option value="Seinen">Seinen</Option>
            </Select>
        </div>
    )
}

FilterBlock.propTypes = {
    currentCategory: string.isRequired,
    mangaHits: array.isRequired,
    changeCurrentCategory: func.isRequired,
    changeCurrentManga: func.isRequired
};

export default FilterBlock;