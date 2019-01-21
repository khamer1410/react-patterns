import React, {lazy, Suspense} from 'react';

const LazyComponent = lazy(()=> import('./LazyComponent'))

const LazySuspense = props => (
  <div>
    <Suspense fallback={<div>loading...</div>}>
      <LazyComponent/>
      <p>In this application lazy loading is used for routing if You want to see its use-case</p>
    </Suspense>
  </div>
)

export default LazySuspense
