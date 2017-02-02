import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveDistribution(params)  {
      var newDistribution = this.store.createRecord('distribution', params);
      var category  = params.category;
      category.get('distributions').addObject(newDistribution);
      newDistribution.save().then(function(){
        return category.save();
      });
      this.transitionTo('data', category);
    },
    destroyDistribution(distribution) {
      distribution.destroyRecord();
      this.transitionTo('data');
    }
  
  }
});
