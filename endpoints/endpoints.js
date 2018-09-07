const express = require('express');
const projectRouter = express.Router();
const posts = require('../ProjectController/projectController.js');

projectRouter.get('/:id', (req, res) => {
const { id } = req.params;
posts.getProjects(id)
    .then(post => {
    if (!post) res.status(422).json({ error: 'project not found' });
    res.status(200).json(post);
    })
.catch(err => {
    res.status(500).json({ err });
    });
 });
 
 module.exports = projectRouter; 