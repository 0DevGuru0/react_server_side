import React  from 'react'
import Routes from '../../client/Routes'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'


export default (req,store)=>{
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes/>
            </StaticRouter>
        </Provider>
    )
    return `
        <html>
            <head>
                <title>ServerSide__Rendering</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
                <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/public-bundle.js"></script>
            </body>
        </html>`
}

