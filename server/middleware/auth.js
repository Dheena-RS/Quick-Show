import {clerkClient} from "@clerk/express";
export const protectAdmin=async(req,res,next)=>{
    try{
        const {userId} =req.auth();
        const user=await clerkClient.users.getUser(userId)
        
        const publicRole = (user.publicMetadata?.role || '').toString().toLowerCase();
        const privateRole = (user.privateMetadata?.role || '').toString().toLowerCase();
        
        console.log("Checking Admin Access for user:", userId, "| Public Role:", publicRole, "| Private Role:", privateRole);

        if(publicRole !== 'admin' && privateRole !== 'admin'){
            return res.json({success:false,message:"not Authorized"})
        }

        next();
    }catch(error){
        console.error("Clerk Admin Auth Error:", error);
        return res.json({success:false,message:"not authorized"});
    }
}