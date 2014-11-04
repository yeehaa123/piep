const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/resources': [
        controller.findMany,
        controller.serialize
      ],
      '/resources/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/resources':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/resources/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/resources/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});