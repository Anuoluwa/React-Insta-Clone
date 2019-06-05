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
      data: this.getPostsData(),
    }
  }

  getPostsData = () => {
    return JSON.parse(localStorage.getItem("posts"));
  };

  setPostData = data => {
    return localStorage.setItem("posts", JSON.stringify(data));
  };

  componentDidMount() {
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", JSON.stringify(dummyData));
    }
    this.setState({ data: this.getPostsData() });
  }

  handleLike = index => {
    let { data } = this.state;
    if (data[index].isLiked === false || data[index].isLiked === undefined) {
      data[index].likes++;
      data[index].isLiked = true;
      this.setPostData(data);
      return this.setState({ data });
    }

    if (data[index].isLiked === true) {
      console.log("bbbb");
      data[index].likes--;
      data[index].isLiked = false;
      this.setPostData(data);
      return this.setState({ data });
    }
  };
  render() {
    return (
      <div>
        <SearchBar />

        {
          dummyData.map((data) =>{
        return (
          <PostContainer key={data.username} 
            data={data}
          />
        )
      })
        }
      </div>
      
    )
  }
}

export default App
