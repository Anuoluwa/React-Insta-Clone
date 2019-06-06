import React, { Component } from "react";

import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

import "./App.css";

import { withAuthenticate } from "./components/authentication/WithAuthenticate";
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default class App extends Component {
  render() {
    return <ComponentFromWithAuthenticate component={PostsPage} />;
  }
}



// import React, { Component } from 'react'
// // import logo from './logo.svg';
// import './App.css';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import SearchBar from './components/SearchBar/SearchBar';
// import PostsPage from './components/PostContainer/PostsPage';


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: this.getPostsData(),
//     }
//   }

//   getPostsData = () => {
//     return JSON.parse(localStorage.getItem("posts"));
//   };

//   setPostData = data => {
//     return localStorage.setItem("posts", JSON.stringify(data));
//   };

//   componentDidMount() {
//     if (localStorage.getItem("posts") === null) {
//       localStorage.setItem("posts", JSON.stringify(dummyData));
//     }
//     this.setState({ data: this.getPostsData() });
//   }

//   handleLike = index => {
//     let { data } = this.state;
//     if (data[index].isLiked === false || data[index].isLiked === undefined) {
//       data[index].likes++;
//       data[index].isLiked = true;
//       this.setPostData(data);
//       return this.setState({ data });
//     }

//     if (data[index].isLiked === true) {
//       console.log("bbbb");
//       data[index].likes--;
//       data[index].isLiked = false;
//       this.setPostData(data);
//       return this.setState({ data });
//     }
//   };
//   handleSearch = e => {
//     this.setState({ data: this.getPostsData() });
//     let searchData = e.target.value;

//     if (searchData.length > 0) {
//       let newData = this.state.data.filter(post => {
//         if (post.username.includes(e.target.value)) {
//           return post;
//         }
//         return null;
//       });
//       this.setState({ data: newData });
//     }
//   };

//   handleClick = (e, index) => {
//     if (e.key === "Enter") {
//       let newComment = {
//         username: "username",
//         text: e.target.value
//       };
//       let { data } = this.state;
//       data[index].comments = data[index].comments.concat(newComment);
//       this.setPostData(data);
//       this.setState({ data });
//     }
//   };

//   render() {
//     if (this.state.data.length > 0) {
//       return (
//         <div className="App">
//           <SearchBar handleSearch={this.handleSearch} />
//           {this.state.data.map((data, item) => {
//             return (
//               <PostContainer
//                 key={data.username}
//                 data={data}
//                 handleLike={this.handleLike}
//                 index={item}
//                 setPostData={this.setPostData}
//                 handleClick={this.handleClick}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//     return (
//       <>
//         <SearchBar handleSearch={this.handleSearch} />
//       </>
//     );
//   }
// }

// export default App
