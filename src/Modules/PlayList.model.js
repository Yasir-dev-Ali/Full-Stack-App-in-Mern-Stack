import mongoose from "mongoose";
import  mongooseAggregatePaginate  from "mongoose-aggregate-paginate-v2";

const playListSchema = new mongoose.Schema({
    vedio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vedio",
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true});

playListSchema.plugin(mongooseAggregatePaginate);

export default mongoose.model("PlayList", playListSchema);
