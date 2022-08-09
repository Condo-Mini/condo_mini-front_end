import React from 'react';
import { Route } from 'react-router-dom';
import HomeAdm from '../pages/HomeAdm';
import { useSelector } from 'react-redux';
function GuestRoute({element: Component, ...rest}) {

  const account = useSelector(state => state.account.user);
  const isAuthenticated = Boolean(account.user);
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