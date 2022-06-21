// framework for created API
const express = require("express");
// create a new router object in your program to handle requests.
const router = express.Router();
// process for verify the identity of a user
const auth = require("../middleware/auth");
// multer, is used for uploading files
const multer = require("../middleware/multer-config");

const saucesCtrl = require("../controllers/sauces");

router.post("/", auth, multer, saucesCtrl.createSauce);

router.put("/:id", auth, multer, saucesCtrl.modifySauce);
router.delete("/:id", auth, saucesCtrl.deleteSauce);
router.post("/:id/like", auth, saucesCtrl.likeSauce);

router.get("/", auth, saucesCtrl.getAllSauces);
router.get("/:id", auth, saucesCtrl.getOneSauce);

module.exports = router;
