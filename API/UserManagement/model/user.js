import {Schema,model} from 'mongoose';
import validator from 'validator';
const userSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        validate:{
            validator:val=>validator.isEmail(val),
            message: '{VALUE} is not a valid {PATH}'
        }
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    googleId:{
        type:String
    }
});

// userSchema.method('comparePassword',function(candidatePass,callback){

// });

// userSchema.pre('save',function(){

// });


const userModel = model('user',userSchema);
export default userModel