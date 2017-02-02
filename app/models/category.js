import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  distributions: DS.hasMany('distribution', { async: true })


});
