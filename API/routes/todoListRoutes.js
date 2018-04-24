// 'use strict';
// module.exports = function(app) {
//   var offers = require('../controllers/offersController');

//   // offers Routes
//   app.route('/offers')
//     .get(offers.list_all_offers)
//     .post(offers.create_a_offer);


//   app.route('/offers/:offerId')
//     .get(offers.read_a_offer)
//     .put(offers.update_a_task)
//     .delete(offers.delete_a_offer);
// };



'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};