import React  from 'react'
import routes from '../../client/Routes'

import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {AES} from 'crypto-js';
import {Helmet} from "react-helmet";
import serialize from 'serialize-javascript' ;

import  {ApolloClient,InMemoryCache,ApolloLink} from 'apollo-boost';
import { ApolloProvider, renderToStringWithData  } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import https from 'https'
import { getCircularReplacer } from './links';

import fetch from 'node-fetch';

export default async(req,store,context)=>{
    const client = new ApolloClient({
        ssrMode: true,
        link:createHttpLink({
            fetch,
            uri: 'https://localhost:3000/api/graphql',
            credentials:'same-origin',
            fetchOptions:{
                agent: new https.Agent({ rejectUnauthorized: false }),
            }
        }),
        cache: new InMemoryCache()
    });
    const component = (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        </ApolloProvider>
    )
    return renderToStringWithData(component).then(content=>{
        let serializedStore = serialize(store.getState())
        let hashedUsersList = AES.encrypt(serializedStore, 'secret key 123');
        const helmet        = Helmet.renderStatic();
        return `
            <html>
                <head>
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    ${helmet.link.toString()}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
                    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <link href="/stylesheets/main.css" rel="stylesheet">
                    <script>window.INITIAL_STATE = ${JSON.stringify(hashedUsersList, getCircularReplacer())}</script>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script src="/public-bundle.js"></script>
                    <script src="/public-bundle.chunk.js"></script>
                    <script>window.__APOLLO_STATE__=${JSON.stringify(client.extract(),getCircularReplacer())}</script>
                </body>
            </html>`
    })
}

