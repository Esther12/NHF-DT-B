const router = require("express").Router();
const noteController = require("../../controllers/Note");
const annouceController = require("../../controllers/Announce");
const worshipController = require("../../controllers/Worship");

router.route("/create_annouce").post(annouceController.Create);
router.route("/create_worship").post(worshipController.Create);

router.route("/display_announce").get(annouceController.Read);
router.route("/display_worship").get(worshipController.Read);

router.route("/upd_annouce/:id").put(annouceController.Update);

router.route("/upd_worship/:id").put(worshipController.Update);

router.route("/delete_annouce").delete(annouceController.remove);
router.route("/delete_worship").delete(noteController.remove);

module.exports = router;
