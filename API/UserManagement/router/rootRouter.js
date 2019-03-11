import express from 'express';
import Auth from '../services/passport';
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello')
})

export default router;