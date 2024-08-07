const express=require('express');
const app=express();
const {User,Accounts} =require("../db2.js");
const { JWT_SECRET } = require('../config');
const router=express.Router();
const jwt=require("jsonwebtoken")
const zod=require('zod');
const { authMiddleware } = require('../middleware.js');




const userValidation=zod.object({
Username:zod.string().email(),
Firstname:zod.string(),
Lastname:zod.string(),
Password:zod.string().min(6)
})

router.post('/signup', async (req, res) => {
    const validation = userValidation.safeParse({
        Username: req.body.Username,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Password: req.body.Password
    });
    if (!validation.success) {
        return res.status(401).json({ "message": "Incorrect inputs" });
    }

    try {
        const Userfind = await User.findOne({ Username: req.body.Username });
        console.log(Userfind);
        if (Userfind) {
            return res.status(401).json({ "message": "Username already taken" });
        }

        const newUser = await User.create({
            Username: req.body.Username,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Password: req.body.Password
        });
        const newId = newUser._id;
        await Accounts.create({ userId: newId, Balance: 1 + Math.random() * 10000 });

        const token = jwt.sign({ newId }, JWT_SECRET);
        return res.json({ "message": "Successfully created", "token": token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Internal server error" });
    }
});




const userValidation2=zod.object({
Username:zod.string().email(),
Password:zod.string().min(6)
})

router.post('/signin',async(req,res)=>{
    const valid=userValidation2.safeParse({Username:req.body.Username,Password:req.body.Password});
   if(!valid.success)
   {
      return res.status(401).json({"message":"Invalid username or Password"});

   }
    const Userfind=await User.findOne({Username:req.body.Username,Password:req.body.Password});
    const token=jwt.sign({id:Userfind._id},JWT_SECRET);
    if(Userfind)
    {
        return res.status(200).json({"token":token});

    }
    return res.status(401).json({"message": "Error while logging in"
    });


})
const updateBody=zod.object({
Firstname:zod.string().optional(),
Lastname:zod.string().optional(),
Password:zod.string().min(6).optional()
})


router.put('/update',authMiddleware,async(req,res)=>{
const Body=req.body;
const validation=updateBody.safeParse(Body);

if(!validation.success)
{
    return res.status(401).json({"messgae":"Error while updating information"});

}

await User.updateOne({_id:req.userId},Body);



return res.status(200).send("updated successfully");


})


// router.get('/bulk', async (req, res) => {
    
//         const { Firstname,Lastname } = req.query;
       
//         const users = await User2.find({
//             Firstname: Firstname,
//             Lastname:Lastname
            
//         });



//         res.status(200).json({"Users":users.map(user=>({
//           Username:user.Username,
//           Firstname:user.Firstname,
//           Lastname:user.Lastname,
//           Id:user._id


         
// }))})



       
// });
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            Firstname: {
                "$regex": filter,
                "$options": "i"
            }
        }, {
            Lastname: {
                "$regex": filter,
                "$options": "i"
            }
        }]
    })
   console.log(users);
    res.json({
        user: users.map(user => ({
            username: user.Username,
            firstName: user.Firstname,
            lastName: user.Lastname,
            _id: user._id
        }))
    })
})

module.exports=router;


