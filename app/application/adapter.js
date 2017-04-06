import DS from 'ember-data';
import config from 'practip-front-end/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
});
