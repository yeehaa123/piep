const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/exercises': [
        controller.findMany,
        controller.serialize
      ],
      '/exercises/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/exercises':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/exercises/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/exercises/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});