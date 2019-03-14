import React  from 'react'
import routes from '../../client/Routes'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {AES} from 'crypto-js'
import serialize from 'serialize-javascript' ;
const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if(seen.has(value)) return;
        seen.add(value);
      }
      return value;
    };
};
export default (req,store)=>{
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    )
    let serializedStore = serialize(store.getState())
    let hashedUsersList = AES.encrypt(serializedStore, 'secret key 123');
    return `
        <html>
            <head>
                <title>ServerSide__Rendering</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <script>window.INITIAL_STATE = ${JSON.stringify(hashedUsersList, getCircularReplacer())}</script>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/public-bundle.js"></script>
            </body>
        </html>`
}

