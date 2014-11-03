const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'objectives',
};

var classProps = {
  fields: [
    'id',
    'author',
    'author_org',
    'content',
    'keywords',
    'created'
  ],
  dependents: []
};

module.exports = BaseModel.extend(instanceProps, classProps);