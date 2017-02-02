import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// adding a dynamic  segment to link to data route
Router.map(function() {
  this.route('data',  {path:  '/category/:category_id'});
});

export default Router;
