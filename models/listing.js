const mongoose= require("mongoose");
const Schema= mongoose.Schema;
const Review= require("./reviews.js");


const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    image:{
        type: String,
        default :"https://luxurystays.in/villas/AzulD/BD2.jpg", 
        set: (v) => v=== ""
        ? "https://luxurystays.in/villas/AzulD/BD2.jpg" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
}) ;

listingSchema.post("findIdandDelete", async(req,res)=>{
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("listing",listingSchema);
module.exports=Listing;