import mongoose from "mongoose";
import { isAppPageRouteDefinition } from "next/dist/server/future/route-definitions/app-page-route-definition";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
    orderItems:[
        {
name:{type:String, required:true},
price:{type:Number, required:true},
qty:{type:Number, required:true},
image:{type:String, required:true},
 product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },

      }
    ],
    shippingAddress:{
       address:{type:String, required:true},
       city:{type:String, required:true},
       postalCode:{type:String, required:true},
       country:{type:String, required:true},
    },
    paymentMethod:{
        type:String,
        required:true,
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String},
        currency:{type:String},
        amount:{type:Number},
        shipping_address:{
            address:{type:String},
            city:{type:String},
            postalCode:{type:String},
            country:{type:String},
        },
        shipping_option:{
            id:{type:String},
            title:{type:String},
            price:{type:Number},
        },
        customer_id:{type:String},
        order_id:{type:String},
        created_time:{type:String},
        _links:{
            self:{
                href:{type:String},
            },
            order:{
                href:{type:String},
            },
        },
    },
    itemsPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0,
    },
    isPaid:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true,
})
const Order = mongoose.model("Order", orderSchema);
export default Order;