const mongoose = require('mongoose');
const { Schema } = require('zod');

mongoose.connect("mongodb+srv://miravanisri123:fqxiFwilePAXKofA@cluster0.i1m82nu.mongodb.net/Paytm")



const UserSchema = new mongoose.Schema({
    Username: { type: String, required: true, unique: true },
    Firstname: { type: String, required: true },
    Lastname: { type: String, required: true },
    Password: { type: String, required: true }
    
});
const AccountSchema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },

Balance:{type:Number,required:true}
})

const User = mongoose.model('User', UserSchema);
const Accounts=mongoose.model('Accounts',AccountSchema);


module.exports = {User,Accounts};

