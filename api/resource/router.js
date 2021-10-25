// build your `/api/resources` router here

const router = require('express').Router();
const Task = require('./model.js');


router.get('/', async (req, res, next) => {
    console.log("in the router, get: ");
    try {
        console.log("in the try, router, get: ");
        const tasks = await Task.getAll(); 
        console.log("tasks: ", tasks);
        res.status(200).json(tasks);
      } catch (err) {
        next(err);
      }
});

router.post('/', async (req, res, next) => {
  const taskData = req.body;

  console.log("taskData: ", taskData);
  try {
      console.log("in the try, post: ");
      const postedTask = await Task.create(taskData);
      console.log("postedTask: ", postedTask);
      res.status(201).json(postedTask);
    } catch (err) {
      console.log("Error: ", err);
      next(err);
    }
});


module.exports = router;
