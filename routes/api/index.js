const router = require("express").Router();
const cardRoutes = require("./cards");
const userRoutes = require("./users")
const commentRoutes = require("./comments")
 
// Card routes
router.use("/cards", cardRoutes);

//User rout
router.use("/user", userRoutes);

//User comments
router.use("/comment", commentRoutes);
 
module.exports = router;