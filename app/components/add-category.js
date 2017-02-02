import Ember from 'ember';

export default Ember.Component.extend({

  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

    saveCategory1() {
      var params = {
        category: this.get('category')

      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory2', params);
    }
  }
});
