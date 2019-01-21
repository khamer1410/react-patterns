import React, { Component } from "react"
import PureComponentExample from "./PureComponent"
import LazySuspenseExample from "./LazySuspense/LazySuspenseExample"

export default class ReactUtilsPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello utils</h1>
        <hr />
        <PureComponentExample/>
        <hr/>
        <LazySuspenseExample/>
        <hr />
      </div>
    );
  }
}

