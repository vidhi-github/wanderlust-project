const Listing = require("../models/listing");
const Review = require("../models/reviews");

module.exports.createReview = async (req, res) => {
    try {
        let listing = await Listing.findById(req.params.id);
        
        if (!listing) {
            // Listing not found
            req.flash("error", "Listing not found.");
            return res.redirect("/listings");
        }

        let newReview = new Review(req.body.review);
        console.log("hiiiiiii");
        console.log(req.user._id);
        newReview.author = req.user._id;
        console.log(newReview);

        listing.reviews.push(newReview);
        await newReview.save();
        await listing.save();

        req.flash("success", "New review created!");
        res.redirect(`/listings/${listing._id}`);    
    } 
    catch (err) {
        console.error(err);
        req.flash("error", "An error occurred. Please try again later.");
        res.redirect("/listings");
    }
};


module.exports.destroyReview = async(req,res)=>{
    let { id, reviewId } = req.params;
    
    await Listing.findByIdAndUpdate(id,{ $pull: {
        reviews: reviewId
    }});
    
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted!");

    res.redirect(`/listings/${id}`);
};
