import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyDistribution(distribution)  {
      if (confirm('Are you sure you want to delete this Solution?')) {
        this.sendAction('destroyDistribution', distribution);
      }
    }
    

  }
});
