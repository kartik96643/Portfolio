import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    end:{
        type:String,
        required:true,
    },
    skill:{
        type:[String],
        default:[],
    }
},{timestamps:true})

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema)

export default Skill;
