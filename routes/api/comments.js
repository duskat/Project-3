const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

  // Matches with "/api/comments/user"
router.route("/user/:id")
  .get(commentsController.findByUserId)

    // Matches with "/api/comments/card"
router.route("/card/:id")
  .get(commentsController.findByCardId)

  router.route("/delete/:id")
  .delete(commentsController.remove)

// Matches with "/api/comments/:id"
// router
//   .route("/:id")
//   .get(commentsController.findById)
//   .put(commentsController.update)
//   .delete(commentsController.remove);

  module.exports = router;