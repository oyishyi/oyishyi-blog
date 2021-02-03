import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading() {
      return (
          <div>loading...</div>
      )
  }
});

export default () => {
    return <LoadableComponent/>;
}