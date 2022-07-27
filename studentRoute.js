const express = require('express');
const router = express.Router();
const {  CheckEmailAndName } = require("./middleware")
const studentController = require('./studentController');
const { getAllStudents,
        createAdvanceStudent,
        checkStudentID
      } = require('./studentController');

// router.param('id', checkStudentID);


router
    .route('/')
    .get(getAllStudents)
    .post(CheckEmailAndName,createAdvanceStudent);
router
    .route('/:id')
    .get(studentController.getStudentById)
    .patch(studentController.updateStudent)
    // .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports = router;
