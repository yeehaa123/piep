const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/objectives': [
        controller.findMany,
        controller.serialize
      ],
      '/objectives/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/objectives':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/objectives/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/objectives/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});