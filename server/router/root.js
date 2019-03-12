import express from 'express';
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore'
const router = express.Router();

router.get('*',(req,res)=>{
    const store = createStore()



    
    res.send(renderer(req,store))
})

export default router;