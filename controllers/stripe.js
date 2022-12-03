import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY);

class StripeController{
    static async payment(req,res){
        stripe.ChargesResource.create({
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
    };

    static async stripePay(req,res){
        try {
            const {name} = req.body;
            if(!name) return res.status(400).json({message:"Please enter the name"});

            const paymentIntent = await stripe.paymentIntents.create({
                amount:req.body * 100,
                metadata:{name},
                currency:"usd",
                payment_method_types:['card']
            });
            const clientSecret = paymentIntent.client_secret;
            res.status(200).json({message:"payment iNitiated",clientSecret});
        } catch (error) {
            console.log(error);
            res.status(500).json({error:error.message})
        }
    }
}

export default StripeController;