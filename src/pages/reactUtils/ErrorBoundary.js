import React, {useState} from "react";
import { Button } from 'components/Buttons';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.warn('error', error)
    console.warn('info', info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Error</h2>
          <p>Check the console for more info</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

export const ErrorMaker = () => {
  const [isBroken, blowIt] = useState(false)

  if (isBroken) {throw new Error('boom')}
  return (
  <div>
    <Button onClick={()=> blowIt(true)}>Don't click me!</Button>
  </div>
)}
