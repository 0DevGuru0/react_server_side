import express from 'express'
import React  from 'react'
import {renderToString}  from 'react-dom/server'
import Home from '../../client/app'

const router = express.Router();
router.get('/',(req,res)=>{
    const content = renderToString(<Home/>);
    const html = `
    <html>
        <head>
            <title> ServerSide__Rendering </title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/public-bundle.js"></script>
        </body>
    </html>`
    res.send(html)
})
export default router;