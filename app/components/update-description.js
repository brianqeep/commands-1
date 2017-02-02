import Ember from 'ember';

export default Ember.Component.extend({
  // updationg the code and details
  updateDistributionForm: false,
  actions: {
    updateDistributionForm()  {
      this.set('updateDistributionForm',  true);
    },
    updateDistribution(category)  {
      var params  = {
        code: this.get('code'),
        details:  this.get('details'),
      };
      this.set('updateDistributionForm',  false);
      this.sendAction('updateDistribution', category, params);
      // send action to display-saveddistribution.js and put category,params parameters respectively in the updateDistribution function
    }
  }
});
