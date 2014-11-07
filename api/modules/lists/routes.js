const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/lists': [
        controller.findMany,
        controller.serialize
      ],
      '/lists/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/lists':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/lists/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/lists/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});
