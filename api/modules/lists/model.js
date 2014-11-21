const BaseModel = require('../../classes/base_model');

var instanceProps = {
  tableName: 'lists',
  resources: function(){
    return this.hasMany(require('../list-resources/model'));
  }
};

var classProps = {
  fields: [
    'id',
    'curator',
    'curator_org',
    'contributors',
    'name',
    'description',
    'resources',
    'version',
    'license',
    'keywords'
  ],
  dependents: ['list_resources']
};

module.exports = BaseModel.extend(instanceProps, classProps);
