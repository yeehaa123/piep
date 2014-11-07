const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'objectives',
  exercises: function(){
    return this.hasMany(require('../resources/model'));
  },
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
  dependents: ['resources']
};

module.exports = BaseModel.extend(instanceProps, classProps);
