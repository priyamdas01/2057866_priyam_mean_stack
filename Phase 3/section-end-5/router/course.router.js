let express = require('express');
let router = express.Router();

let courseController = require("../controller/course.controller");

router.post("/add", courseController.addCourses);
router.delete("/delete/:cid", courseController.deleteCourses);
router.put("/update", courseController.updateCourses);
router.get("/fetch", courseController.fetchCourses);

module.exports = router;