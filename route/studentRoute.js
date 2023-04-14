const { createStudent, updateStudent, getStudents, deleteStudent } = require("../controller/studentController");

const router = require("express").Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;