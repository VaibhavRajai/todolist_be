import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import dotenv from 'dotenv'
dotenv.config()

const router=express.Router()

router.post('/signup',async(req,res)=>{
    const {username,password}=req.body;
    try{
        const existingUser=await User.findOne({username})
        if(existingUser){
              return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPasword=await bcrypt.hash(password,10)
        const user=new User({username,password:hashedPasword})
        await user.save();
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET!, {
      expiresIn: '1h'
    });
    res.status(201).json({message:'User registered',token})
    }catch(error){
    res.status(500).json({ message: 'Server error' });
    }
})

export default router;