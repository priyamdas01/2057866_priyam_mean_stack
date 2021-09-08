let courseModel = require("../model/course.model");


let addCourses = (req, res) => {
    let courseData = req.body;
    let course = new courseModel({
        _id: courseData._id,
        cname: courseData.cname,
        desc: courseData.desc,
        cost: courseData.cost
    });

    courseModel.insertMany(course, (err, result) => {
        if (!err) {
            res.send("you added the course successfully ");
        } else {
            res.send(err);
        }
    })
};

let deleteCourses = (req, res) => {
    let cid = req.params.cid;
    console.log(cid)
    courseModel.deleteOne({
        _id: cid
    }, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send(err);
        }
    })
};
let fetchCourses = (req, res) => {
    courseModel.find({}, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    })
};
let updateCourses = (req, res) => {
    let course = req.body;
    courseModel.updateOne({
        _id: course._id
    }, {
        $set: {
            cost: course.cost
        }
    }, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send(err);
        }
    })
};

module.exports = {
    addCourses,
    deleteCourses,
    fetchCourses,
    updateCourses,
};