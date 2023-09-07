
const {addToCart, getCartItems, removeFromCart} = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add",addToCart);
router.get("/cartItems/:email",getCartItems);
router.put("/remove",removeFromCart);
module.exports = router;