import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header'

const rootRoute = ({route})=>(
    <div>
        <Header/>
        {renderRoutes(route.routes)}
    </div>
)

export default rootRoute;