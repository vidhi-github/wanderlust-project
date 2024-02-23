const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    image:{
        type: String,
        default :"https://unsplash.com/photos/a-view-of-the-ocean-from-the-top-of-a-hill-o_P3BFZP2EI", 
        set: (v) => v=== ""
        ? "https://unsplash.com/photos/a-view-of-the-ocean-from-the-top-of-a-hill-o_P3BFZP2EI" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
}) ;

const Listing = mongoose.model("listing",listingSchema);
module.exports=Listing;