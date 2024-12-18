import mongoose from "mongoose";

const vedioSchema = new mongoose.Schema({
    vedioFile: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: true,
        trim: true,
    },
    videoUrl: {
        type: String,
        required: true,
        trim: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    published: {
        type: Boolean,
        default: false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},{timestamps: true});

export default mongoose.model("Vedio", vedioSchema);    
export function validateVedio(vedio) {
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required(),
        thumbnail: Joi.string().required(),
        videoUrl: Joi.string().required(),
    };
    return Joi.validate(vedio, schema);     
}
    