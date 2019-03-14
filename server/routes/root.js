import express from 'express';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';
import { matchRoutes } from "react-router-config";

import routes from '../../client/Routes'

const router = express.Router();

router.get('*',(req,res)=>{
    const store = createStore(req)
    const promise = matchRoutes(routes,req.path).map(({route})=>(
         route.loadData ? route.loadData(store) : Promise.resolve(null)
    ))
    Promise.all(promise).then(()=>{
        res.send(renderer(req,store))
    })
})

export default router;