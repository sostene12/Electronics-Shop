import Stripe from "stripe";

class StripeController{
    static async payment(req,res){
        Stripe.ChargesResource.create({
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:'usd'
        },
        (stripeError,stripeRes) =>{
            if(stripeError){
                res.status(500).json(stripeError);
            }
            else{
                res.status(200).json(stripeRes);
            }
        }
        );
    }
}

export default StripeController;