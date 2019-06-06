import React, { Component } from "react";

export const withAuthenticate = PostsPage => Login => 
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      let token = localStorage.getItem("token");
      return this.setState({ loogedIn: token !== null });
    }

    render() {
      if (this.state.loogedIn === true) {
        return <PostsPage {...this.props} />;
      } else {
        return <Login {...this.props} />;
      }
    }
  };