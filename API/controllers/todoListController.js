// 'use strict';

// var mongoose = require('mongoose'),
//   Offer = mongoose.model('offers');

// exports.list_all_offers = function(req, res) {
//     Offer.find({}, function(err, offer) {
//     if (err)
//       res.send(err);
//     res.json(offer);
//   });
// };




// exports.create_a_offer = function(req, res) {
//   var new_offer = new Offer(req.body);
//   new_offer.save(function(err, offer) {
//     if (err)
//       res.send(err);
//     res.json(offer);
//   });
// };


// exports.read_a_offer = function(req, res) {
//   Offer.findById(req.params.offerId, function(err, offer) {
//     if (err)
//       res.send(err);
//     res.json(offer);
//   });
// };


// exports.update_a_offer = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.offerId}, req.body, {new: true}, function(err, offer) {
//     if (err)
//       res.send(err);
//     res.json(offer);
//   });
// };


// exports.delete_a_offer = function(req, res) {


//   Offer.remove({
//     _id: req.params.offerId
//   }, function(err, offer) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Offer successfully deleted' });
//   });
// };




'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};