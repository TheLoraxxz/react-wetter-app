import React, { lazy, Suspense } from 'react';

const LazyWetter = lazy(() => import('./Wetter'));

const Wetter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWetter city={''} {...props} />
  </Suspense>
);

export default Wetter;
