const controler = require("../controller/User.controller");
const router = require("express").Router();

router.route("/").get(controler.getAll);

router.route("/:id").get(controler.getByID);

router.route("/").post(controler.create);

router.route("/auth/sign_in").post(controler.signIn);

router.route("/:id").put(controler.update);

router.route("/:id").delete(controler._delete);

module.exports = router; 