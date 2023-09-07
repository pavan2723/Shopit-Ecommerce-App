

const User = require("../models/UserModel");


module.exports.addToCart = async (req,res)=>{
    try{
        const {email,data} = req.body;
        const user = await User.findOne({email});
        if(user){
            const {cartItems} = user;
            const itemAlreadyAdded = cartItems.find(({id})=>(id === data.id));
            if(!itemAlreadyAdded){
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        cartItems :[...user.cartItems, data]
                    },
                    {new :true}
                );
            }
            else{
                return res.json({msg:"Item Already Added to Cart"});
            }
        }
        else{
            await User.create({email, cartItems : [data]});
        }
        return res.json({msg:"Item Added Successfully"});
    }

    catch(err){
        console.log(err);
        return res.json({msg:"Error adding Item"})
    }
};

module.exports.getCartItems = async(req,res)=>{
    try{
        const {email} = req.params;
        const user = await User.findOne({email});
        if(user){
           return res.json({msg:"Success",items:user.cartItems});
        }
        else{
            return res.json({msg:"User doesn't Exist"})
        }
    }
    catch(err){
        return res.json({msg:"Error fetching movie"});
    }
};

module.exports.removeFromCart = async(req,res)=>{
    try{
        const {email,itemId} = req.body;
        const user = await User.findOne({email});
        if(user){
            const items = user.cartItems;
            const itemIndex = items.findIndex(({id})=>(id === itemId));
            if(!itemIndex)  res.send({msg:"Item not found"});
            items.splice(itemIndex,1);
            
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        cartItems:items
                    },
                    {new :true}
                );
                return res.json({msg:"Removed",cartItems:items})
        }
        else return res.json({msg:"user with given email not found"})
        
    }
    catch(err){
        console.log(err)
        return res.json({msg:"Error deleting item"});
    }
};