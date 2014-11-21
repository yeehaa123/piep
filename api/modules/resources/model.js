const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'resources',
  objective: function() {
    return this.belongsTo(require('../objectives/model'));
  },
};

var classProps = {
  fields: [
    'id',
    'author',
    'author_org',
    'title',
    'description',
    'objective_id',
    'github_url',
    'keywords',
    'version',
    'license',
    'created'
  ],
  dependents: []
};

module.exports = BaseModel.extend(instanceProps, classProps);
