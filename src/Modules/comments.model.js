import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const   commentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    vedio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vedio",
        required: true,
    },
}, {timestamps: true});
commentsSchema.plugin(mongooseAggregatePaginate);
export default mongoose.model("Comments", commentsSchema);
