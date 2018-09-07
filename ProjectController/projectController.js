const knex = require('../database/db.js');
 
module.exports = {
    getProjects(id) {
        if(!id) {
            console.log(`[projectController] No ID supplied.`);
            return;
        }

        console.log(`[projectController] Getting Project ${id}`);
        return knex('projects').where({ id });
    }
};