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



const axiosInstance = axios.create({baseURL:'/api'})
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)));

let DecryptUsersList  = AES.decrypt(window.INITIAL_STATE, 'secret key 123');
let UsersList_State = JSON.parse(DecryptUsersList.toString(enc.Utf8))

const store = createStore(reducers,UsersList_State,enhancer)

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
    ,document.querySelector('#root')
)