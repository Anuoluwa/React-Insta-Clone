import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from "./components/SearchBar/SearchBar";



export class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }
  render() {
    return (
      <div>
        <SearchBar />

        {
          dummyData.map((data) =>{
        return (
          <PostContainer 
            dummyData={data}
          />
        )
      })
        }
      </div>
      
    )
  }
}

export default App
