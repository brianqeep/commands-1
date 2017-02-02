import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      distributions: this.store.findAll('distribution')
    });
  },
  actions: {
    saveCategory3(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },
    destroyCategory(category){
      category.destroyRecord();
      this.transitionTo('index');
    }
  }
});
