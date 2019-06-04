import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'


export class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }
  render() {
    return (
      dummyData.map((data) =>{
        return (
          <PostContainer 
            dummyData={data}
          />
        )
      })
    )
  }
}

export default App
