import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';
import { matchRoutes } from "react-router-config";
import routes from '../../client/Routes'

export default () => (req,res)=>{
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
        const pageRender = renderer(req,store,context,res)
        Promise.all([pageRender]).then((value)=>{
            if(context.notFound){ res.status(404)  }
            res.send(value[0])
        })
    })
}