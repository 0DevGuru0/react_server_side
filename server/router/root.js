const express = require('express');
const router = express.Router();
const Home = require('../../client/app').default;
const {renderToString} = require('react-dom/server');


router.get('/',(req,res)=>{
    const content = renderToString(<Hom/>);
    const html = `
    <html>
        <head>
            <title> ServerSide__Rendering </title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="public-bundle.js"></script>
        </body>
    </html>`
    res.send(html)
})
module.exports= router;