const {Department, validate} = require('../models/department');

//get 
exports.getDept = async function (req, res) {
    
    //check if id given
    if(req.params.id) {

        //get data with id
        const dept = await Department.findById(req.params.id);

        //if not in db return
        if(!dept) return res.status(404).send('Department with given id not found!!!');

        //response
        res.send(dept);
    } else {

        //get all data
        const depts = await Department.find();

        //response
        res.send(depts);
    }
}

//add 
exports.addDept = async function (req, res) {
        
    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);

    //create
    let dept = new Department({
        name: req.body.name
    });

    //save to db
    dept = await dept.save();

    //response
    res.send(dept);
}

//update 
exports.updateDept = async function (req, res) {
    
    //validate user input
    const { error } = await validate(req.body);
    
    //if error return
    if(error) return res.status(400).send(error.details[0].message);
 
    //find by id and update
    const dept = await Department.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: true
    });

    //if not found return
    if(!dept) return res.status(404).send('Department with given id not found!!!');
 
    //response
    res.send(dept);
 }

 //delete
 exports.deleteDept = async function (req, res) {

    //find by id and delete
    const dept = await Department.findByIdAndRemove(req.params.id);

    //if not found return
    if(!dept) return res.status(404).send('Department with given id not found!!!');
 
    //response
    res.send(dept);
 }