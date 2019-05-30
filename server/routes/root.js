import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';
import { matchRoutes } from "react-router-config";
import routes from '../../client/Routes'
import Redis from 'ioredis';
import axios from 'axios';

var redis = new Redis();
export default () => (req,res)=>{
    const store = createStore(req)
    const page = req.query.page || 1;
    const promise = matchRoutes(routes,req.path).map(({route})=>{
        return route.loadData ? route.loadData(store,page) : null;
    }).map(promise=>{
        if(promise){
            return new Promise((resolve,rej)=>{
                promise.then(resolve).catch(resolve)
            })
        }
    })
    Promise.all(promise).then(()=>{
        let context = {};
        const pageRender = renderer(req,store,context,res)
        Promise.all([pageRender]).then(async(value)=>{
            if(context.notFound){ res.status(404)  }
            redis.incr('totalVisit')
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
            await axios.get('https://localhost:3000/api/userInfo')
            res.send(value[0])
        })
    })
}
