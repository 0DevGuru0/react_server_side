import express from 'express';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';
import { matchRoutes } from "react-router-config";

import routes from '../../client/Routes'

const router = express.Router();

router.get('*',(req,res)=>{
    const store = createStore(req)
    const promise = matchRoutes(routes,req.path).map(({route})=>{
        return route.loadData ? route.loadData(store) : null;
    }).map(promise=>{
        if(promise){
            return new Promise((resolve,rej)=>{
                promise.then(resolve).catch(resolve)
            })
        }
    })
    Promise.all(promise).then(()=>{
        let context = {};
        const pageRender = renderer(req,store,context)
        // if(context.url){
        //     return res.redirect(301,context.url);
        // }
        if(context.notFound){ res.status(404)  }
        res.send(pageRender)
    })
})

export default router;