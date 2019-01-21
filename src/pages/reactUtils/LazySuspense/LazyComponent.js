import React from 'react';

const LazyComponent = ()=> (
  <div>
    <h2>I was lazy rendered</h2>
    <p>lazy components are fetched just when they needs to be render. This help saving 'general bundle' size. </p>
  </div>
)

export default LazyComponent
