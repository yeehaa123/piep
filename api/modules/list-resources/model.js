const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'list_resources',
  list: function() {
    return this.belongsTo(require('../lists/model'));
  },
};

var classProps = {
  fields: [
    'id',
    'notes',
    'list_id',
    'piep_id'
  ],
  dependents: []
};

module.exports = BaseModel.extend(instanceProps, classProps);
