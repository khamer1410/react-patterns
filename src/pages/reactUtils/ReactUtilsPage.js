import React, { Component } from "react"
import PureComponentExample from "./PureComponent"
import LazySuspenseExample from "./LazySuspense/LazySuspenseExample"
import ErrorBoundaryExample from "./ErrorBoundary"
import {ErrorMaker} from "./ErrorBoundary"

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
        <ErrorBoundaryExample>
          <ErrorMaker/>
        </ErrorBoundaryExample>
        <hr/>
      </div>
    );
  }
}

