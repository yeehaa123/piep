const BaseModel = require('endpoints-model')({
  Bookshelf: require('./database'),
  Validator: require('./validator')
});

module.exports = BaseModel;