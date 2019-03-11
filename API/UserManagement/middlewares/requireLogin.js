export default (req,res,next)=>{
    req.user ? next() : res.status(404).redirect('/login') ;
}