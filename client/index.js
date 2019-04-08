import React from 'react';
import {hydrate}from 'react-dom';

//-----------Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {AES,enc,} from 'crypto-js'
import axios from 'axios'
//-----------Router
import {BrowserRouter} from 'react-router-dom';
import routes from './Routes';
import {renderRoutes} from 'react-router-config'

//-----------Internal_import
import reducers from './store/reducers';

//-----------GraphQL[APOLLO_CLIENT]
import { ApolloClient,InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    ssrForceFetchDelay: 100,
    connectToDevTools: true,
    link: createHttpLink({
        uri: 'http://localhost:3000/api/graphql',
        credentials:'same-origin'
    }),
    cache: new InMemoryCache({dataIdFromObject:o=>o.id}).restore(window.__APOLLO_STATE__),
})

const axiosInstance = axios.create({baseURL: '/api'});
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)));

let DecryptUsersList  = AES.decrypt(window.INITIAL_STATE, 'secret key 123');
let UsersList_State = JSON.parse(DecryptUsersList.toString(enc.Utf8))

const store = createStore(reducers,UsersList_State,enhancer)
function Render(Route){
    hydrate(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <BrowserRouter>
                    {renderRoutes(Route)}
                </BrowserRouter>
            </Provider>
        </ApolloProvider>
        ,document.querySelector('#root')
    )
}

Render(routes)

// if(module.hot){
//     module.hot.accept('./Routes',()=>{
//         const NewCounter = require('./Routes').default;
//         Render(NewCounter)
//     })
// }