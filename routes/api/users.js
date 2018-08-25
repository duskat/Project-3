const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/user/loaduser"
router.route("/loaduser/:id")
  .get(usersController.findById)
  .post(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/user/updatename/:id"
router.route("/updatename/:id")
.post(usersController.updateName);

module.exports = router;
