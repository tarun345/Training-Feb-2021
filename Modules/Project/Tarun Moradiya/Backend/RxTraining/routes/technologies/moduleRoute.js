// const router = require('express').Router({mergeParams: true});
const router = require('express').Router();
const {getModules, addModule, updateModule, deleteModule} = require('../../controllers/moduleController');
const contentRouter = require('./contentRoute');
const upload = require('../../middlewares/updoad')
const admin = require('../../middlewares/admin');

//routes

//get all technologies
//GET http://localhost:3000/technologies/:id/modules/:module
router.get('/:cType', getModules);

//get technologie
//GET http://localhost:3000/technologies/:id/modules/:module/:id
router.get('/:cType/:id', getModules);

//add technologie
//POST http://localhost:3000/technologies/:id/modules/:module
router.post('/:cType', admin, upload.array('contents'), addModule);

//add technologie
//PUT http://localhost:3000/technologies/:id/modules/:module/:id
// router.put('/:cType/:id', updateModule);
router.post('/:cType/:id/update', admin, updateModule);

//add technologie
//DELETE http://localhost:3000/technologies/:id/modules/:module/:id
// router.delete('/:cType/:id', deleteModule);
router.get('/:cType/:id/delete', admin, deleteModule);

//child routes 

// http://localhost:3000/technologies/:id/modules/:module/:id
router.use('/:cType/:id/contents', (req, res, next) => {
    req.cType = req.params.cType;
    req.moduleId = req.params.id;
    next();
}, contentRouter);

//exports
module.exports = router;

