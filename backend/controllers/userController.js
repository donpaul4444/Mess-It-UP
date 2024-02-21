const user = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")

module.exports = {
  signup: async (req, res) => {
    try {
      const data = req.body;
      const existinguser = await user.findOne({ email: data.email });

      if (existinguser) {
        res.status(400).json({ email: "Email Id Already Exist" });
        return;
      }
      data.password = await bcrypt.hash(data.password, 10);
      await user.create(data);
      res.json({ message: "success" });
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res) => {
    try {
      const data = req.body;
      const existinguser = await user.findOne({ email: data.email });

      if (existinguser) {
        let status = await bcrypt.compare(data.password, existinguser.password);
        console.log(status);
        if (status) {
          const user = { email: existinguser.email };
          const usertoken={role:"user",id:existinguser._id}

          const accessToken = jwt.sign(usertoken, process.env.ACCESS_TOKEN_SECRET);
          res.cookie("jwt-user", accessToken, {maxage:30*24*60*60*1000, httpOnly:true, secure:false})
    
          res.json({ message: "success", user });
        } else {
          res.status(400).json({errors:{ password: "Password Incorrect" }});
          return;
        }
      } else {
        res.status(400).json({errors:{ email: "Invalid Email Id" }});
        return;
      }
    } catch (error) {
      next(error)
    }
  },
};
