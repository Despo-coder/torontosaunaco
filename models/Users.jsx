import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
    },
    bookmark:[{
        type: Schema.Types.ObjectId,
        ref: "Products",
    }]
},
{
    timestamps: true,
});

const User = models?.User || model("User", UserSchema);
export default User;
