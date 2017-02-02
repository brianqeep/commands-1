import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyDistribution(distribution) {
      this.sendAction('destroyDistribution',  distribution);
    },
    updateDistribution(category,params)  {
      this.sendAction('updateDistribution', category, params);
      // send action from display-distribution.js to data.js
    }
  }
});
