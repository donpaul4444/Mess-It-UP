const user=require("../models/user.js")
const bcrypt= require("bcrypt")

module.exports={
    signup: async(req,res)=>{
      try {
        const data= req.body
        const existinguser= await user.findOne({email:data.email})
     
        if(existinguser){
         res.status(400).json({email:"Email Id Already Exist"})
          return
        }
        data.password = await bcrypt.hash(data.password, 10);
        await user.create(data)
        res.json({message:"success"})
      } catch (error) {
        console.log(error);
      }
    }
   
}