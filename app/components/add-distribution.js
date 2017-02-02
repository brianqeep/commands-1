import Ember from 'ember';

export default Ember.Component.extend({
  addDistributionForm:  false,
  actions: {
    distributionFormShow()  {
      this.set('addDistributionForm', true);
    },
    saveDistribution()  {
      var params  = {
        code: this.get('code'),
        details:  this.get('details'),
        category: this.get('category')
      };
      this.set('addDistributionForm', false);
      this.sendAction('saveDistribution',params);
    }
  }
});
