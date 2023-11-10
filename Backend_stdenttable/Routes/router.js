const express = require("express");
const students = require("../Models/StudentSchema")
const router = express.Router();

router.post("/StudentData", async(req,res) => {
    console.log(req.body);
    const {name, course, mobile} = req.body;

    if(!name || !course || !mobile){
        res.status(404).json("Please provide details");
    }

    try {
        const presentstudent = await students.findOne({mobile : mobile});
            if (presentstudent) {
                res.status(404).json("Student already exist");
            }else{
                const addstudents = new students({name, course, mobile});
                await addstudents.save();
                res.status(201).json(addstudents);
            }
        
    } catch (erro) {
        res.status(404).json(erro);
    }
});

module.exports = router;