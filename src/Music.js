import React, { Component } from "react";
import "./media.css";
import Template from "./template";

export default class Tv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navtitle: "Music",
    };
  }

  render() {
    return <Template {...this.state} />;
  }
}