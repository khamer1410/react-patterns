import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const SECONDS_TO_REDIRECT = 10

const NotFound = ({ location }) => {
  const [count, setCount] = useState(SECONDS_TO_REDIRECT)

  const countdown = () => setCount(count - 1)

  useEffect(() => {
    const interval = setTimeout(countdown, 1000)
    return () => clearTimeout(interval)
  }, [count])

  return (
    <div>
      <p>404# Not Found!</p>
      <p>No match for <code>{location.pathname}</code></p>
      <p>Redirect to homepage in {count}</p>
      {count === 0 && <Redirect to='/' />}
    </div>
  )
}

export default NotFound
