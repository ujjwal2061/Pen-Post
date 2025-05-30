const jwt= require("jsonwebtoken")
// verfiy the user 
const verifytoken=(req,res,next)=>{
    const token =req.cookies.auth_token;
    if (!token) return res.status(401).json({ message: "No token provided" });
    try {
        const decoded = jwt.verify(token, process.env.JWT);
        req.user = {
          id: decoded.id,
          username: decoded.username,
        }
        next();
      } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
      }
    };
// function to genertae token
  const token=(userdata)=>{
    return jwt.sign(userdata,process.env.JWT)
  }
  module.exports={verifytoken,token};