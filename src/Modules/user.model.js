import mongoose from "mongoose";
import  bcryptjs  from "bcryptjs";
import  jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true, 
            lowercase: true
        },
        Avatar: {
            type: String,   //cloudinary   URL
            required: true,
            trim: true,


        },
        coverImage: {
            type: String,   //cloudinary   URL
            required: true,
            trim: true,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
    ],
    password: { 
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },
    refreshToken: { 
        type: String,
        trim: true,
        
    },


    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    const salt = await bcryptjs.genSalt();
    this.password = await bcryptjs.hash(this.password, salt);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcryptjs.compare(password, this.password);
};

userSchema.method.generateAccessToken= function () {
   return jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email,
    
   },
   process.env.JWT_SECRET,
   {
    expiresIn: process.env.JWT_EXPIRE,
   },

};

userSchema.method.generateRefreshToken= function () {
    return jwt.sign({
     _id: this._id,

},
process.env.JWT_REFRESH_TOKEN,
{
 expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE,
},
);
}
export  default mongoose.model("User", userSchema);