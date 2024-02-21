
const errorhandler=(err,req,res,next)=>{
console.log(err);
res.status(400).json({message:err?.message||"something went wrong"})
}

module.exports=errorhandler