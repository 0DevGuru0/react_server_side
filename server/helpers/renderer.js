import React  from 'react'
import Routes from '../../client/Routes'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

export default req=>{
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes/>
        </StaticRouter>
    )
    return `
        <html>
            <head>
                <title>ServerSide__Rendering</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/public-bundle.js"></script>
            </body>
        </html>`
}

