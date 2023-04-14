const Student = require("../model/student");

// ************************* Create ************************************//

exports.createStudent = async (req,res,next) => {

    const { firstName, lastName, classNumber, section } = req.body;

    const newStudent = new Student({firstName, lastName, classNumber, section});

    await newStudent.save();
    res.status(201).json({newStudent});
}

// ************************* Update ************************************//

exports.updateStudent = async (req,res,next) => {

    try {
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(400).json({error: "It is not a valid user !!"});
        }

        if(req.body.hasOwnProperty("firstName"))
        student.firstName = req.body.firstName;
        
        if(req.body.hasOwnProperty("lastName"))
        student.lastName = req.body.lastName;

        if(req.body.hasOwnProperty("classNumber"))
        student.classNumber = req.body.classNumber;

        if(req.body.hasOwnProperty("section"))
        student.section = req.body.section;

        await student.save();
        return res.status(200).json({message:"Record has updated successfully !!", student});

    } catch (error) {
        return res.status(400).json({error:error.message});
    }
};


// ************************* Get All ************************************//

exports.getStudents = async (req,res,next) => {

    const student = await Student.find();
    return res.status(200).json({student});
}

// ************************* Delete By Id ************************************//



exports.deleteStudent = async (req,res,next) => {

    try {

      //  const student = await Student.findById(req.body.id);
        await Student.deleteOne({_id:req.params.id});

        res.status(200).json({ message: "Deleted Successfully" });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    

}