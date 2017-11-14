const TaskPgDAO = require('../models/taskPgDAO');

const taskPgDAO = new TaskPgDAO();

// Display list of all Task
exports.task_list = function(req, res,next){

    taskPgDAO.getAllTasks(
        function(lesTasks){

            res.render('cabalist',{listeTasks: lesTasks})
        }
    );
};


//Display One Task find by id
exports.task_detail = function(req, res, next) {

    taskPgDAO.getTaskById(req.params.id, function(laTask){
            res.send("L'utilisateur " + req.params.id + " s'appelle " + laTask.nom + ".")
        }

    );

};


// Handle Task create on POST
exports.task_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Task create POST');
};