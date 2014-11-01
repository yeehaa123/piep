const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'exercises',
};

var classProps = {
  fields: [
    'id',
    'author',
    'author_org',
    'title',
    'description',
    'github_url',
    'keywords',
    'created'
  ],
  dependents: []
};

module.exports = BaseModel.extend(instanceProps, classProps);