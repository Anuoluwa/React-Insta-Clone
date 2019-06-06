import React, { Component } from "react";

export const withAuthenticate = PostsPage => Login => 
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthed: false
      };
    }

    componentDidMount() {
      let token = localStorage.getItem("token");
      return this.setState({ isAuthed: token !== null });
    }

    render() {
      if (this.state.isAuthed === true) {
        return <PostsPage {...this.props} />;
      } else {
        return <Login {...this.props} />;
      }
    }
  };