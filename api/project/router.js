// build your `/api/projects` router here

const router = require('express').Router();
const Project = require('./model.js');

router.get('/', async (req, res, next) => {
    console.log("in the router, get: ");
    try {
        console.log("in the project, router, get: ");
        const projects = await Project.getAll(); 
        console.log("projects: ", projects);
        res.status(200).json(projects);
      } catch (err) {
        next(err);
      }
}); 

router.post('/', async (req, res, next) => {
    
    const projectData = req.body;
    console.log("projectData: ", projectData);

    try {
        const postedProject = await Project.create(projectData);
        console.log("postedProject: ", postedProject);
        res.status(201).json(postedProject);
      } catch (err) {
        console.log("Error: ", err);
        next(err);
      }
});


module.exports = router;
