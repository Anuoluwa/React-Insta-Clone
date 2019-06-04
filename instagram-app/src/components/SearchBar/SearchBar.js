import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <div class="logo"></div> 
                        <div class="logo-name"></div>
                    </div>
                    <div class="search"></div>
                    <div>
                        <div id="navigation"></div>
                        <div id="cupid"></div>
                        <div id="user"></div>
                    </div>
                </header>
            </div>
        )
    }
}

export default SearchBar
