import React from 'react';
import { Route } from 'react-router-dom';
import HomeAdm from '../pages/HomeAdm';
function GuestRoute({element: Component, ...rest}) {
const isAuthenticated = true;  
  return(
    <Route {...rest} element={(
        isAuthenticated
        ? <HomeAdm />
        : Component
    )}
    />
  )
}

export default GuestRoute;