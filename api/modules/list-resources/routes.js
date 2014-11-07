const model = require('./model');
const controller = require('./controller');
const BaseRouter = require('endpoints-router');

module.exports = BaseRouter.extend({
  model: model,
  controller: controller,
  routes: {
    get: {
      '/list-resources': [
        controller.findMany,
        controller.serialize
      ],
      '/list-resources/:id': [
        controller.findById,
        controller.serialize
      ]
    },
    post: {
      '/list-resources':[
        controller.create,
        controller.serialize
      ]
    },
    put: {
      "/list-resources/:id": [
        controller.findById,
        controller.update,
        controller.serialize
      ]
    },
    delete: {
      '/list-resources/:id': [
        controller.findById,
        controller.destroy,
        controller.serialize
      ]
    }
  }
});
