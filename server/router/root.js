import express from 'express';
import renderer from '../helpers/renderer';
const router = express.Router();

router.get('*',(req,res)=>{
    res.send(renderer(req))
})

export default router;