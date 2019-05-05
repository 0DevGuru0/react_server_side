import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers  from '../../client/store/reducers';
import axios from 'axios';


export default (req)=>{
    const axiosInstance = axios.create({
        baseURL:process.env.userManagementHost,
        headers: { cookie: req.get('cookie') || '' }
    });
    const store = createStore(reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance)))

    return store
};