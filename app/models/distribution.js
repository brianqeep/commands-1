import DS from 'ember-data';

export default DS.Model.extend({
details: DS.attr(),
code: DS.attr(),
  category: DS.belongsTo('category', { async: true })

});
