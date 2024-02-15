
const errorhandler=(err,req,res,next)=>{
console.log(err);
res.status(500)
}


module.exports=errorhandler