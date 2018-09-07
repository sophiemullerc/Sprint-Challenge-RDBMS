const express = require('express');
const projectRouter = express.Router();
const posts = require('../ProjectController/projectController.js');

projectRouter.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    console.log(`[endpoints] => /projects/${id}`);
    
    posts.getProjects(id)
        .then(post => {
            if (!post) {
                res.status(422).json({ error: 'project not found' });
            }
            res.status(200).json(post);
        })
        .catch(err => {
            console.log(`[endpoints] ${err}`)
            res.status(500).json({ error: `${err}` });
        });
 });
 
 module.exports = projectRouter; 