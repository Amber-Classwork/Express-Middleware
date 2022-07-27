const fs = require('fs');
const DATA_FILE = `${__dirname}/data.json`;

const {Student} = require("./schema/student.schema")

// exports.checkStudentID = (req, res, next, val) =>{
//   if(req.params.id * 1 > students.length){
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// }

exports.getAllStudents = async (req, res) =>{
    try{
        const students = await Student.find();
        res.status(200).json({
            status: 'success',
            results: students.length,
            data: {
              students
            }
        });
    }catch(error){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }

}

exports.createAdvanceStudent = async (req, res) =>{
  try{
    const student = await new Student(req.body).save()
      res.status(201).json({
        status: 'success',
        data: {
          student
        }
      })
  }catch(error){
    res.status(404).json({
        status: 'fail',
        message: error
    })
  }
}

exports.getStudentById = async (req, res) =>{
   try{
        const varID = req.params.id;

        const student = await Student.findById(varID);

        if(student){
            return res.status(200).json({
                status: 'success',
                data: {
                student
                }
            });
        }else{
            return res.status(404).json({
            status: 'fail',
            message: 'Record not found. Invalid ID!'
        });
        }
   }catch(error){
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.updateStudent = async (req, res) =>{
    try{
        let id = req.params.id;
        let student = await Student.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            status: 'success',
            data:{
              student
            }
          });
    }catch(error){
        res.status(404).json({
            status: 'fail',
            error: error.message
          });
    }
}

exports.deleteStudent = async (req, res) =>{
    try{
        let id = req.params.id;
        await Student.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
          });
    }catch(error){
        res.status(404).json({
            status: 'fail',
            error: error.message
          });
    }


  //Can also be 204 if you are not returning anything in the response

}